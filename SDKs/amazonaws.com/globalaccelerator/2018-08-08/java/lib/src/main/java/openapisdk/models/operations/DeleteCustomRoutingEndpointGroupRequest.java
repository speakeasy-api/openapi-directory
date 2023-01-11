package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomRoutingEndpointGroupRequest {
    public DeleteCustomRoutingEndpointGroupHeaders headers;
    public DeleteCustomRoutingEndpointGroupRequest withHeaders(DeleteCustomRoutingEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCustomRoutingEndpointGroupRequest request;
    public DeleteCustomRoutingEndpointGroupRequest withRequest(openapisdk.models.shared.DeleteCustomRoutingEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}