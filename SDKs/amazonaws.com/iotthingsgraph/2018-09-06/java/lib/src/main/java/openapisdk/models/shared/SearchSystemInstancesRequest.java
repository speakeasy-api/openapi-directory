package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchSystemInstancesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public SystemInstanceFilter[] filters;
    public SearchSystemInstancesRequest withFilters(SystemInstanceFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchSystemInstancesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchSystemInstancesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}