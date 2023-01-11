package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeMetricFiltersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricFilters")
    public MetricFilter[] metricFilters;
    public DescribeMetricFiltersResponse withMetricFilters(MetricFilter[] metricFilters) {
        this.metricFilters = metricFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeMetricFiltersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}