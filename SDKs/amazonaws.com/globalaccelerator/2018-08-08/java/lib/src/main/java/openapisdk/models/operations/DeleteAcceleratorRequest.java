package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAcceleratorRequest {
    public DeleteAcceleratorHeaders headers;
    public DeleteAcceleratorRequest withHeaders(DeleteAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAcceleratorRequest request;
    public DeleteAcceleratorRequest withRequest(openapisdk.models.shared.DeleteAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}