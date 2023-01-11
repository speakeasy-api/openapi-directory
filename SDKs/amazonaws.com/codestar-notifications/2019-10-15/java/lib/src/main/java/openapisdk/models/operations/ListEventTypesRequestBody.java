package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventTypesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public openapisdk.models.shared.ListEventTypesFilter[] filters;
    public ListEventTypesRequestBody withFilters(openapisdk.models.shared.ListEventTypesFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListEventTypesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventTypesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}