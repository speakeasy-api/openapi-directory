package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMetricPolicyOutput {
    @JsonProperty("MetricPolicy")
    public MetricPolicy metricPolicy;
    public GetMetricPolicyOutput withMetricPolicy(MetricPolicy metricPolicy) {
        this.metricPolicy = metricPolicy;
        return this;
    }
}