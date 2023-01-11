package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetObjectInformation
 * Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchGetObjectInformation {
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchGetObjectInformation withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}