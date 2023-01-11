package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForgetDeviceRequest {
    public ForgetDeviceHeaders headers;
    public ForgetDeviceRequest withHeaders(ForgetDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ForgetDeviceRequest request;
    public ForgetDeviceRequest withRequest(openapisdk.models.shared.ForgetDeviceRequest request) {
        this.request = request;
        return this;
    }
}