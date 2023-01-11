package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomRoutingEndpointGroupsRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public ListCustomRoutingEndpointGroupsRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListCustomRoutingEndpointGroupsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomRoutingEndpointGroupsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}