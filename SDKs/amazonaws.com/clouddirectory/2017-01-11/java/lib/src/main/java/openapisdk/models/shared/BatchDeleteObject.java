package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchDeleteObject
 * Represents the output of a <a>DeleteObject</a> operation.
**/
public class BatchDeleteObject {
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchDeleteObject withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}