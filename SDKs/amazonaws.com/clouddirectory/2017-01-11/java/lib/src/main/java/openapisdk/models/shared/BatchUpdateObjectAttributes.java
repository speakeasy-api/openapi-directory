package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchUpdateObjectAttributes
 * Represents the output of a <code>BatchUpdate</code> operation. 
**/
public class BatchUpdateObjectAttributes {
    @JsonProperty("AttributeUpdates")
    public ObjectAttributeUpdate[] attributeUpdates;
    public BatchUpdateObjectAttributes withAttributeUpdates(ObjectAttributeUpdate[] attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchUpdateObjectAttributes withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}