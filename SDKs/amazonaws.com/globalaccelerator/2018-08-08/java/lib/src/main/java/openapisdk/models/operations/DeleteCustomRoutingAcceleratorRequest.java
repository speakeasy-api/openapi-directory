package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomRoutingAcceleratorRequest {
    public DeleteCustomRoutingAcceleratorHeaders headers;
    public DeleteCustomRoutingAcceleratorRequest withHeaders(DeleteCustomRoutingAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCustomRoutingAcceleratorRequest request;
    public DeleteCustomRoutingAcceleratorRequest withRequest(openapisdk.models.shared.DeleteCustomRoutingAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}