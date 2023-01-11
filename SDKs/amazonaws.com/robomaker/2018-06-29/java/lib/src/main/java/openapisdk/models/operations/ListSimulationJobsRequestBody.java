package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSimulationJobsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.Filter[] filters;
    public ListSimulationJobsRequestBody withFilters(openapisdk.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListSimulationJobsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSimulationJobsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}