package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricToRetain
 * The metric you want to retain. Dimensions are optional.
**/
public class MetricToRetain {
    @JsonProperty("metric")
    public String metric;
    public MetricToRetain withMetric(String metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricDimension")
    public MetricDimension metricDimension;
    public MetricToRetain withMetricDimension(MetricDimension metricDimension) {
        this.metricDimension = metricDimension;
        return this;
    }
}