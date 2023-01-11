package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConfigurationAggregatorSourcesStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregatedSourceStatusList")
    public AggregatedSourceStatus[] aggregatedSourceStatusList;
    public DescribeConfigurationAggregatorSourcesStatusResponse withAggregatedSourceStatusList(AggregatedSourceStatus[] aggregatedSourceStatusList) {
        this.aggregatedSourceStatusList = aggregatedSourceStatusList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConfigurationAggregatorSourcesStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}