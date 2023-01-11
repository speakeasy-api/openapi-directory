package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEndpointGroupRequest {
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public DeleteEndpointGroupRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
}