package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAttributeGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeGroup")
    public AttributeGroupSummary attributeGroup;
    public DeleteAttributeGroupResponse withAttributeGroup(AttributeGroupSummary attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}