package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOperationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public OperationFilter[] filters;
    public ListOperationsRequest withFilters(OperationFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListOperationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListOperationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}