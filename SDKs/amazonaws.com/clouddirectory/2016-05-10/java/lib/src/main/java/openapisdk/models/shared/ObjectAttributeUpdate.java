package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectAttributeUpdate
 * Structure that contains attribute update information.
**/
public class ObjectAttributeUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectAttributeAction")
    public ObjectAttributeAction objectAttributeAction;
    public ObjectAttributeUpdate withObjectAttributeAction(ObjectAttributeAction objectAttributeAction) {
        this.objectAttributeAction = objectAttributeAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectAttributeKey")
    public AttributeKey objectAttributeKey;
    public ObjectAttributeUpdate withObjectAttributeKey(AttributeKey objectAttributeKey) {
        this.objectAttributeKey = objectAttributeKey;
        return this;
    }
}