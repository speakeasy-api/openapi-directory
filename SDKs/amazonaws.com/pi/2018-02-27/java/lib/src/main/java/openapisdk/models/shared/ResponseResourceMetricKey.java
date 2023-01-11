package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseResourceMetricKey
 * An object describing a Performance Insights metric and one or more dimensions for that metric.
**/
public class ResponseResourceMetricKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public java.util.Map<String, String> dimensions;
    public ResponseResourceMetricKey withDimensions(java.util.Map<String, String> dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("Metric")
    public String metric;
    public ResponseResourceMetricKey withMetric(String metric) {
        this.metric = metric;
        return this;
    }
}