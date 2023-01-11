package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmDeviceRequest {
    public ConfirmDeviceHeaders headers;
    public ConfirmDeviceRequest withHeaders(ConfirmDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmDeviceRequest request;
    public ConfirmDeviceRequest withRequest(openapisdk.models.shared.ConfirmDeviceRequest request) {
        this.request = request;
        return this;
    }
}