package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAttributeGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeGroup")
    public AttributeGroup attributeGroup;
    public CreateAttributeGroupResponse withAttributeGroup(AttributeGroup attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}