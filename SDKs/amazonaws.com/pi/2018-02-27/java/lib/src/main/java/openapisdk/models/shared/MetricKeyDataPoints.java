package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricKeyDataPoints
 * A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
**/
public class MetricKeyDataPoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataPoints")
    public DataPoint[] dataPoints;
    public MetricKeyDataPoints withDataPoints(DataPoint[] dataPoints) {
        this.dataPoints = dataPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public ResponseResourceMetricKey key;
    public MetricKeyDataPoints withKey(ResponseResourceMetricKey key) {
        this.key = key;
        return this;
    }
}