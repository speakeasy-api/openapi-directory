package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceInstanceRequest {
    public UpdateDeviceInstanceHeaders headers;
    public UpdateDeviceInstanceRequest withHeaders(UpdateDeviceInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDeviceInstanceRequest request;
    public UpdateDeviceInstanceRequest withRequest(openapisdk.models.shared.UpdateDeviceInstanceRequest request) {
        this.request = request;
        return this;
    }
}