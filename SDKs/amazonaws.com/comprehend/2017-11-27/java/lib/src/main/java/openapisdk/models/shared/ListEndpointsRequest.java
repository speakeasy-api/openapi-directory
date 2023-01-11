package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEndpointsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public EndpointFilter filter;
    public ListEndpointsRequest withFilter(EndpointFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListEndpointsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEndpointsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}