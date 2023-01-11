package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTasksRequest
 * ListTasksRequest
**/
public class ListTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public TaskFilter[] filters;
    public ListTasksRequest withFilters(TaskFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListTasksRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTasksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}