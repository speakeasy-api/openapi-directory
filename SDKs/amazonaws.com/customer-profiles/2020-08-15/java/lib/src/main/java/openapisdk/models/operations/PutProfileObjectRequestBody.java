package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutProfileObjectRequestBody {
    @JsonProperty("Object")
    public String object;
    public PutProfileObjectRequestBody withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public PutProfileObjectRequestBody withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
}