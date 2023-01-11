package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminForgetDeviceRequest {
    public AdminForgetDeviceHeaders headers;
    public AdminForgetDeviceRequest withHeaders(AdminForgetDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminForgetDeviceRequest request;
    public AdminForgetDeviceRequest withRequest(openapisdk.models.shared.AdminForgetDeviceRequest request) {
        this.request = request;
        return this;
    }
}