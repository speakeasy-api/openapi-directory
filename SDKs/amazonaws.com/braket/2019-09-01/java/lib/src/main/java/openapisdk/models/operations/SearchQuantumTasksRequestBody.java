package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchQuantumTasksRequestBody {
    @JsonProperty("filters")
    public openapisdk.models.shared.SearchQuantumTasksFilter[] filters;
    public SearchQuantumTasksRequestBody withFilters(openapisdk.models.shared.SearchQuantumTasksFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchQuantumTasksRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchQuantumTasksRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}