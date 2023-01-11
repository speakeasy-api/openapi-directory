package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListForecastExportJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public ListForecastExportJobsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListForecastExportJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListForecastExportJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}