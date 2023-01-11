package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAcceleratorRequest {
    public UpdateAcceleratorHeaders headers;
    public UpdateAcceleratorRequest withHeaders(UpdateAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAcceleratorRequest request;
    public UpdateAcceleratorRequest withRequest(openapisdk.models.shared.UpdateAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}