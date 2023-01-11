package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEndpointRequest {
    public DeleteEndpointHeaders headers;
    public DeleteEndpointRequest withHeaders(DeleteEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEndpointMessage request;
    public DeleteEndpointRequest withRequest(openapisdk.models.shared.DeleteEndpointMessage request) {
        this.request = request;
        return this;
    }
}