package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEndpointRequestBody {
    @JsonProperty("EndpointRequest")
    public UpdateEndpointRequestBodyEndpointRequest endpointRequest;
    public UpdateEndpointRequestBody withEndpointRequest(UpdateEndpointRequestBodyEndpointRequest endpointRequest) {
        this.endpointRequest = endpointRequest;
        return this;
    }
}