package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutMetricPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public PutMetricPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonProperty("MetricPolicy")
    public MetricPolicy metricPolicy;
    public PutMetricPolicyInput withMetricPolicy(MetricPolicy metricPolicy) {
        this.metricPolicy = metricPolicy;
        return this;
    }
}