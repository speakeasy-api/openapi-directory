package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkAttributeAction
 * The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
**/
public class LinkAttributeAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeActionType")
    public UpdateActionTypeEnum attributeActionType;
    public LinkAttributeAction withAttributeActionType(UpdateActionTypeEnum attributeActionType) {
        this.attributeActionType = attributeActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeUpdateValue")
    public TypedAttributeValue attributeUpdateValue;
    public LinkAttributeAction withAttributeUpdateValue(TypedAttributeValue attributeUpdateValue) {
        this.attributeUpdateValue = attributeUpdateValue;
        return this;
    }
}