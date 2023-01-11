package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransformProcessingConfig
 * The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
**/
public class TransformProcessingConfig {
    @JsonProperty("computeLocation")
    public ComputeLocationEnum computeLocation;
    public TransformProcessingConfig withComputeLocation(ComputeLocationEnum computeLocation) {
        this.computeLocation = computeLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardingConfig")
    public ForwardingConfig forwardingConfig;
    public TransformProcessingConfig withForwardingConfig(ForwardingConfig forwardingConfig) {
        this.forwardingConfig = forwardingConfig;
        return this;
    }
}