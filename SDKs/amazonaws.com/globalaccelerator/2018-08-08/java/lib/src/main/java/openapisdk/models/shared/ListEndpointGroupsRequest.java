package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEndpointGroupsRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public ListEndpointGroupsRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListEndpointGroupsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEndpointGroupsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}