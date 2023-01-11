package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEndpointGroupRequest {
    public DeleteEndpointGroupHeaders headers;
    public DeleteEndpointGroupRequest withHeaders(DeleteEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEndpointGroupRequest request;
    public DeleteEndpointGroupRequest withRequest(openapisdk.models.shared.DeleteEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}