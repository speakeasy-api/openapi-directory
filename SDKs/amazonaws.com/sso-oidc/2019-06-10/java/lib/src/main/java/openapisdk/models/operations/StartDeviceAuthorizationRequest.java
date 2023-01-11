package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDeviceAuthorizationRequest {
    public StartDeviceAuthorizationHeaders headers;
    public StartDeviceAuthorizationRequest withHeaders(StartDeviceAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartDeviceAuthorizationRequestBody request;
    public StartDeviceAuthorizationRequest withRequest(StartDeviceAuthorizationRequestBody request) {
        this.request = request;
        return this;
    }
}