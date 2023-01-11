package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateAttributeGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationArn")
    public String applicationArn;
    public DisassociateAttributeGroupResponse withApplicationArn(String applicationArn) {
        this.applicationArn = applicationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeGroupArn")
    public String attributeGroupArn;
    public DisassociateAttributeGroupResponse withAttributeGroupArn(String attributeGroupArn) {
        this.attributeGroupArn = attributeGroupArn;
        return this;
    }
}