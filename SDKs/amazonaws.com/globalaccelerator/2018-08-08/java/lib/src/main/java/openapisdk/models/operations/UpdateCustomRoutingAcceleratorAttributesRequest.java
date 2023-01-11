package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomRoutingAcceleratorAttributesRequest {
    public UpdateCustomRoutingAcceleratorAttributesHeaders headers;
    public UpdateCustomRoutingAcceleratorAttributesRequest withHeaders(UpdateCustomRoutingAcceleratorAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCustomRoutingAcceleratorAttributesRequest request;
    public UpdateCustomRoutingAcceleratorAttributesRequest withRequest(openapisdk.models.shared.UpdateCustomRoutingAcceleratorAttributesRequest request) {
        this.request = request;
        return this;
    }
}