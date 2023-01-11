package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectAttributeAction
 * The action to take on the object attribute.
**/
public class ObjectAttributeAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectAttributeActionType")
    public UpdateActionTypeEnum objectAttributeActionType;
    public ObjectAttributeAction withObjectAttributeActionType(UpdateActionTypeEnum objectAttributeActionType) {
        this.objectAttributeActionType = objectAttributeActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectAttributeUpdateValue")
    public TypedAttributeValue objectAttributeUpdateValue;
    public ObjectAttributeAction withObjectAttributeUpdateValue(TypedAttributeValue objectAttributeUpdateValue) {
        this.objectAttributeUpdateValue = objectAttributeUpdateValue;
        return this;
    }
}