package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCheckLayerAvailabilityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public LayerFailure[] failures;
    public BatchCheckLayerAvailabilityResponse withFailures(LayerFailure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layers")
    public Layer[] layers;
    public BatchCheckLayerAvailabilityResponse withLayers(Layer[] layers) {
        this.layers = layers;
        return this;
    }
}