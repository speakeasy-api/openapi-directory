package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LayerFailure
 * An object representing an Amazon ECR image layer failure.
**/
public class LayerFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public LayerFailureCodeEnum failureCode;
    public LayerFailure withFailureCode(LayerFailureCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public LayerFailure withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerDigest")
    public String layerDigest;
    public LayerFailure withLayerDigest(String layerDigest) {
        this.layerDigest = layerDigest;
        return this;
    }
}