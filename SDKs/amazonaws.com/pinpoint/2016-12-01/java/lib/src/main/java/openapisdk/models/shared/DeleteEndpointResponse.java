package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEndpointResponse {
    @JsonProperty("EndpointResponse")
    public EndpointResponse endpointResponse;
    public DeleteEndpointResponse withEndpointResponse(EndpointResponse endpointResponse) {
        this.endpointResponse = endpointResponse;
        return this;
    }
}