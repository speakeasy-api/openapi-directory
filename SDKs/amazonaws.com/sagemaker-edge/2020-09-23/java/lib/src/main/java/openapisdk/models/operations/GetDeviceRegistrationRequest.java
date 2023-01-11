package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceRegistrationRequest {
    public GetDeviceRegistrationHeaders headers;
    public GetDeviceRegistrationRequest withHeaders(GetDeviceRegistrationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetDeviceRegistrationRequestBody request;
    public GetDeviceRegistrationRequest withRequest(GetDeviceRegistrationRequestBody request) {
        this.request = request;
        return this;
    }
}