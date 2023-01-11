package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachToIndexRequestBody {
    @JsonProperty("IndexReference")
    public AttachToIndexRequestBodyIndexReference indexReference;
    public AttachToIndexRequestBody withIndexReference(AttachToIndexRequestBodyIndexReference indexReference) {
        this.indexReference = indexReference;
        return this;
    }
    @JsonProperty("TargetReference")
    public AttachToIndexRequestBodyTargetReference targetReference;
    public AttachToIndexRequestBody withTargetReference(AttachToIndexRequestBodyTargetReference targetReference) {
        this.targetReference = targetReference;
        return this;
    }
}