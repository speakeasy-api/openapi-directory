package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublishMetricAction
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
**/
public class PublishMetricAction {
    @JsonProperty("Dimensions")
    public Dimension[] dimensions;
    public PublishMetricAction withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
}