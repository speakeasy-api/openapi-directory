package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCustomRoutingEndpointGroupRequest {
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public DeleteCustomRoutingEndpointGroupRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
}