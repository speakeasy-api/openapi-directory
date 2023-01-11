package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserEndpointsResponse {
    @JsonProperty("EndpointsResponse")
    public EndpointsResponse endpointsResponse;
    public DeleteUserEndpointsResponse withEndpointsResponse(EndpointsResponse endpointsResponse) {
        this.endpointsResponse = endpointsResponse;
        return this;
    }
}