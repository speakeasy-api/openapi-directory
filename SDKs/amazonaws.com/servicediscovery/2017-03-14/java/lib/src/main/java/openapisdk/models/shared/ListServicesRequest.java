package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public ServiceFilter[] filters;
    public ListServicesRequest withFilters(ServiceFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListServicesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListServicesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}