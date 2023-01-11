package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricInfo
 * Information about the CloudWatch metric that reflects quota usage.
**/
public class MetricInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricDimensions")
    public java.util.Map<String, String> metricDimensions;
    public MetricInfo withMetricDimensions(java.util.Map<String, String> metricDimensions) {
        this.metricDimensions = metricDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public MetricInfo withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricNamespace")
    public String metricNamespace;
    public MetricInfo withMetricNamespace(String metricNamespace) {
        this.metricNamespace = metricNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricStatisticRecommendation")
    public String metricStatisticRecommendation;
    public MetricInfo withMetricStatisticRecommendation(String metricStatisticRecommendation) {
        this.metricStatisticRecommendation = metricStatisticRecommendation;
        return this;
    }
}