package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetAttributeUpdate
 * A structure that contains information used to update an attribute.
**/
public class FacetAttributeUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public UpdateActionTypeEnum action;
    public FacetAttributeUpdate withAction(UpdateActionTypeEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attribute")
    public FacetAttribute attribute;
    public FacetAttributeUpdate withAttribute(FacetAttribute attribute) {
        this.attribute = attribute;
        return this;
    }
}