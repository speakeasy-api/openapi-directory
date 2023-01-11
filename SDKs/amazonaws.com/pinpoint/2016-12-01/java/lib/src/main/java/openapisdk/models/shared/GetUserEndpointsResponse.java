package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUserEndpointsResponse {
    @JsonProperty("EndpointsResponse")
    public EndpointsResponse endpointsResponse;
    public GetUserEndpointsResponse withEndpointsResponse(EndpointsResponse endpointsResponse) {
        this.endpointsResponse = endpointsResponse;
        return this;
    }
}