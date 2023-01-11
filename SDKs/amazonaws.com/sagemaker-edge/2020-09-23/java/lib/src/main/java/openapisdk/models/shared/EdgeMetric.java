package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EdgeMetric
 * Information required for edge device metrics.
**/
public class EdgeMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimension")
    public String dimension;
    public EdgeMetric withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public EdgeMetric withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public EdgeMetric withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public EdgeMetric withValue(Double value) {
        this.value = value;
        return this;
    }
}