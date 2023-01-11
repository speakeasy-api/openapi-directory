package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MetricProcessingConfig
 * The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.
**/
public class MetricProcessingConfig {
    @JsonProperty("computeLocation")
    public ComputeLocationEnum computeLocation;
    public MetricProcessingConfig withComputeLocation(ComputeLocationEnum computeLocation) {
        this.computeLocation = computeLocation;
        return this;
    }
}