package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDevicePoolRequest {
    public UpdateDevicePoolHeaders headers;
    public UpdateDevicePoolRequest withHeaders(UpdateDevicePoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDevicePoolRequest request;
    public UpdateDevicePoolRequest withRequest(openapisdk.models.shared.UpdateDevicePoolRequest request) {
        this.request = request;
        return this;
    }
}