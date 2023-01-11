package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomRoutingEndpointGroupRequest {
    public CreateCustomRoutingEndpointGroupHeaders headers;
    public CreateCustomRoutingEndpointGroupRequest withHeaders(CreateCustomRoutingEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomRoutingEndpointGroupRequest request;
    public CreateCustomRoutingEndpointGroupRequest withRequest(openapisdk.models.shared.CreateCustomRoutingEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}