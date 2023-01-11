package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricMetadata
 * This type defines the name and data type of a metric.
**/
public class MetricMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public MetricMetadata withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKey")
    public String metricKey;
    public MetricMetadata withMetricKey(String metricKey) {
        this.metricKey = metricKey;
        return this;
    }
}