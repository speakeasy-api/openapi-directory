package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricFilter
 * Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
**/
public class MetricFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Long creationTime;
    public MetricFilter withCreationTime(Long creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterName")
    public String filterName;
    public MetricFilter withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterPattern")
    public String filterPattern;
    public MetricFilter withFilterPattern(String filterPattern) {
        this.filterPattern = filterPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupName")
    public String logGroupName;
    public MetricFilter withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricTransformations")
    public MetricTransformation[] metricTransformations;
    public MetricFilter withMetricTransformations(MetricTransformation[] metricTransformations) {
        this.metricTransformations = metricTransformations;
        return this;
    }
}