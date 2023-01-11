package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchMetricsDetail
 *  Information about an Amazon CloudWatch metric. 
**/
public class CloudWatchMetricsDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public CloudWatchMetricsDimension[] dimensions;
    public CloudWatchMetricsDetail withDimensions(CloudWatchMetricsDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public CloudWatchMetricsDetail withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespace")
    public String namespace;
    public CloudWatchMetricsDetail withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Period")
    public Long period;
    public CloudWatchMetricsDetail withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stat")
    public CloudWatchMetricsStatEnum stat;
    public CloudWatchMetricsDetail withStat(CloudWatchMetricsStatEnum stat) {
        this.stat = stat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public String unit;
    public CloudWatchMetricsDetail withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}