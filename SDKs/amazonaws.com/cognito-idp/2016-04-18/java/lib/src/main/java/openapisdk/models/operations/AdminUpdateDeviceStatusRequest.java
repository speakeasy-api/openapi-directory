package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminUpdateDeviceStatusRequest {
    public AdminUpdateDeviceStatusHeaders headers;
    public AdminUpdateDeviceStatusRequest withHeaders(AdminUpdateDeviceStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminUpdateDeviceStatusRequest request;
    public AdminUpdateDeviceStatusRequest withRequest(openapisdk.models.shared.AdminUpdateDeviceStatusRequest request) {
        this.request = request;
        return this;
    }
}