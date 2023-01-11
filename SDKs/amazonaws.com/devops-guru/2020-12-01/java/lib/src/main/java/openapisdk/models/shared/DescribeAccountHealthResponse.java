package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAccountHealthResponse {
    @JsonProperty("MetricsAnalyzed")
    public Long metricsAnalyzed;
    public DescribeAccountHealthResponse withMetricsAnalyzed(Long metricsAnalyzed) {
        this.metricsAnalyzed = metricsAnalyzed;
        return this;
    }
    @JsonProperty("OpenProactiveInsights")
    public Long openProactiveInsights;
    public DescribeAccountHealthResponse withOpenProactiveInsights(Long openProactiveInsights) {
        this.openProactiveInsights = openProactiveInsights;
        return this;
    }
    @JsonProperty("OpenReactiveInsights")
    public Long openReactiveInsights;
    public DescribeAccountHealthResponse withOpenReactiveInsights(Long openReactiveInsights) {
        this.openReactiveInsights = openReactiveInsights;
        return this;
    }
    @JsonProperty("ResourceHours")
    public Long resourceHours;
    public DescribeAccountHealthResponse withResourceHours(Long resourceHours) {
        this.resourceHours = resourceHours;
        return this;
    }
}