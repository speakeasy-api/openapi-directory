package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEndpointResponse {
    @JsonProperty("EndpointResponse")
    public EndpointResponse endpointResponse;
    public GetEndpointResponse withEndpointResponse(EndpointResponse endpointResponse) {
        this.endpointResponse = endpointResponse;
        return this;
    }
}