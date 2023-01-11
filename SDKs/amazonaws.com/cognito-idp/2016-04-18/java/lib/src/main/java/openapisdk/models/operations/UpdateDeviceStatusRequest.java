package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceStatusRequest {
    public UpdateDeviceStatusHeaders headers;
    public UpdateDeviceStatusRequest withHeaders(UpdateDeviceStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDeviceStatusRequest request;
    public UpdateDeviceStatusRequest withRequest(openapisdk.models.shared.UpdateDeviceStatusRequest request) {
        this.request = request;
        return this;
    }
}