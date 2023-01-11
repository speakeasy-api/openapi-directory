package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResolverEndpointIpAddressesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListResolverEndpointIpAddressesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResolverEndpointIpAddressesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public ListResolverEndpointIpAddressesRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
}