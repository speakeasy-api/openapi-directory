package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationArn")
    public String applicationArn;
    public DisassociateResourceResponse withApplicationArn(String applicationArn) {
        this.applicationArn = applicationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public DisassociateResourceResponse withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}