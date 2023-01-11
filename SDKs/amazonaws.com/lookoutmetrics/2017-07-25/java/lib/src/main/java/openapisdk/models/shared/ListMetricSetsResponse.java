package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMetricSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetSummaryList")
    public MetricSetSummary[] metricSetSummaryList;
    public ListMetricSetsResponse withMetricSetSummaryList(MetricSetSummary[] metricSetSummaryList) {
        this.metricSetSummaryList = metricSetSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMetricSetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}