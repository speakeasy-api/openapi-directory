package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetObjectInformationRequestBody {
    @JsonProperty("ObjectReference")
    public GetObjectInformationRequestBodyObjectReference objectReference;
    public GetObjectInformationRequestBody withObjectReference(GetObjectInformationRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}