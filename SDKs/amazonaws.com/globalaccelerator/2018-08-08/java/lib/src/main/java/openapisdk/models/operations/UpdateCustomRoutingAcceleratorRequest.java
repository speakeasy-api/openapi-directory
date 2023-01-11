package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomRoutingAcceleratorRequest {
    public UpdateCustomRoutingAcceleratorHeaders headers;
    public UpdateCustomRoutingAcceleratorRequest withHeaders(UpdateCustomRoutingAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCustomRoutingAcceleratorRequest request;
    public UpdateCustomRoutingAcceleratorRequest withRequest(openapisdk.models.shared.UpdateCustomRoutingAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}