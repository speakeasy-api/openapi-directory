package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAcceleratorRequest {
    public CreateAcceleratorHeaders headers;
    public CreateAcceleratorRequest withHeaders(CreateAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAcceleratorRequest request;
    public CreateAcceleratorRequest withRequest(openapisdk.models.shared.CreateAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}