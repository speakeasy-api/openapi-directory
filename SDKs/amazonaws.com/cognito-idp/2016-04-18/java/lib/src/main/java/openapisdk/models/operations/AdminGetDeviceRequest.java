package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminGetDeviceRequest {
    public AdminGetDeviceHeaders headers;
    public AdminGetDeviceRequest withHeaders(AdminGetDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminGetDeviceRequest request;
    public AdminGetDeviceRequest withRequest(openapisdk.models.shared.AdminGetDeviceRequest request) {
        this.request = request;
        return this;
    }
}