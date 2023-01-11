package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveCustomRoutingEndpointsRequest {
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public RemoveCustomRoutingEndpointsRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
    @JsonProperty("EndpointIds")
    public String[] endpointIds;
    public RemoveCustomRoutingEndpointsRequest withEndpointIds(String[] endpointIds) {
        this.endpointIds = endpointIds;
        return this;
    }
}