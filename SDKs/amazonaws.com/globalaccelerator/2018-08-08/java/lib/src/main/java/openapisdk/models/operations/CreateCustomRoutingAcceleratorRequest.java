package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomRoutingAcceleratorRequest {
    public CreateCustomRoutingAcceleratorHeaders headers;
    public CreateCustomRoutingAcceleratorRequest withHeaders(CreateCustomRoutingAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomRoutingAcceleratorRequest request;
    public CreateCustomRoutingAcceleratorRequest withRequest(openapisdk.models.shared.CreateCustomRoutingAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}