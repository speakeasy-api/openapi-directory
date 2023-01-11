package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDevEndpointRequest {
    public DeleteDevEndpointHeaders headers;
    public DeleteDevEndpointRequest withHeaders(DeleteDevEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDevEndpointRequest request;
    public DeleteDevEndpointRequest withRequest(openapisdk.models.shared.DeleteDevEndpointRequest request) {
        this.request = request;
        return this;
    }
}