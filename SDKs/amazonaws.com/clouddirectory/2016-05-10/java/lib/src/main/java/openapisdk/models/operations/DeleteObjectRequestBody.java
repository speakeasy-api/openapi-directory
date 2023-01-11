package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteObjectRequestBody {
    @JsonProperty("ObjectReference")
    public DeleteObjectRequestBodyObjectReference objectReference;
    public DeleteObjectRequestBody withObjectReference(DeleteObjectRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}