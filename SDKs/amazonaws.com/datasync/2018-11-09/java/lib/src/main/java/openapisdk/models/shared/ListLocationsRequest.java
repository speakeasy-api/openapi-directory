package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLocationsRequest
 * ListLocationsRequest
**/
public class ListLocationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public LocationFilter[] filters;
    public ListLocationsRequest withFilters(LocationFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListLocationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLocationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}