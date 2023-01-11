package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEndpointGroupRequest {
    public CreateEndpointGroupHeaders headers;
    public CreateEndpointGroupRequest withHeaders(CreateEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEndpointGroupRequest request;
    public CreateEndpointGroupRequest withRequest(openapisdk.models.shared.CreateEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}