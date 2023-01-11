package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEndpointRequest {
    public CreateEndpointHeaders headers;
    public CreateEndpointRequest withHeaders(CreateEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEndpointRequest request;
    public CreateEndpointRequest withRequest(openapisdk.models.shared.CreateEndpointRequest request) {
        this.request = request;
        return this;
    }
}