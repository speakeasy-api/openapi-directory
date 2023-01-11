package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachFromIndexRequestBody {
    @JsonProperty("IndexReference")
    public DetachFromIndexRequestBodyIndexReference indexReference;
    public DetachFromIndexRequestBody withIndexReference(DetachFromIndexRequestBodyIndexReference indexReference) {
        this.indexReference = indexReference;
        return this;
    }
    @JsonProperty("TargetReference")
    public DetachFromIndexRequestBodyTargetReference targetReference;
    public DetachFromIndexRequestBody withTargetReference(DetachFromIndexRequestBodyTargetReference targetReference) {
        this.targetReference = targetReference;
        return this;
    }
}