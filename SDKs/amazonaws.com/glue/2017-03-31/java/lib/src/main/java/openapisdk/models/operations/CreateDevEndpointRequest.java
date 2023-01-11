package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDevEndpointRequest {
    public CreateDevEndpointHeaders headers;
    public CreateDevEndpointRequest withHeaders(CreateDevEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDevEndpointRequest request;
    public CreateDevEndpointRequest withRequest(openapisdk.models.shared.CreateDevEndpointRequest request) {
        this.request = request;
        return this;
    }
}