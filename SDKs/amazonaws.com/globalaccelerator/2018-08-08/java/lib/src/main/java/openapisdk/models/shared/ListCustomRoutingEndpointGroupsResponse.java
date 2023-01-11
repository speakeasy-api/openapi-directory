package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomRoutingEndpointGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroups")
    public CustomRoutingEndpointGroup[] endpointGroups;
    public ListCustomRoutingEndpointGroupsResponse withEndpointGroups(CustomRoutingEndpointGroup[] endpointGroups) {
        this.endpointGroups = endpointGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomRoutingEndpointGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}