package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAggregateDiscoveredResourceCountsRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public GetAggregateDiscoveredResourceCountsRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public ResourceCountFilters filters;
    public GetAggregateDiscoveredResourceCountsRequest withFilters(ResourceCountFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupByKey")
    public ResourceCountGroupKeyEnum groupByKey;
    public GetAggregateDiscoveredResourceCountsRequest withGroupByKey(ResourceCountGroupKeyEnum groupByKey) {
        this.groupByKey = groupByKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetAggregateDiscoveredResourceCountsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAggregateDiscoveredResourceCountsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}