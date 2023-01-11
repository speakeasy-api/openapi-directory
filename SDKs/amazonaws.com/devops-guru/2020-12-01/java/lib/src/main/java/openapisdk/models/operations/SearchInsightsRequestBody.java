package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchInsightsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public SearchInsightsRequestBodyFilters filters;
    public SearchInsightsRequestBody withFilters(SearchInsightsRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public SearchInsightsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchInsightsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("StartTimeRange")
    public SearchInsightsRequestBodyStartTimeRange startTimeRange;
    public SearchInsightsRequestBody withStartTimeRange(SearchInsightsRequestBodyStartTimeRange startTimeRange) {
        this.startTimeRange = startTimeRange;
        return this;
    }
    @JsonProperty("Type")
    public SearchInsightsRequestBodyTypeEnum type;
    public SearchInsightsRequestBody withType(SearchInsightsRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}