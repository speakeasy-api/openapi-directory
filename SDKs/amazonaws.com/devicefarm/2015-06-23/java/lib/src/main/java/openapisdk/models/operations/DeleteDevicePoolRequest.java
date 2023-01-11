package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDevicePoolRequest {
    public DeleteDevicePoolHeaders headers;
    public DeleteDevicePoolRequest withHeaders(DeleteDevicePoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDevicePoolRequest request;
    public DeleteDevicePoolRequest withRequest(openapisdk.models.shared.DeleteDevicePoolRequest request) {
        this.request = request;
        return this;
    }
}