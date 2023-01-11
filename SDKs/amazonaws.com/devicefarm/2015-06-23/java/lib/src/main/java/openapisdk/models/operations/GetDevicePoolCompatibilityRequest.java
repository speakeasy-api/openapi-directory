package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePoolCompatibilityRequest {
    public GetDevicePoolCompatibilityHeaders headers;
    public GetDevicePoolCompatibilityRequest withHeaders(GetDevicePoolCompatibilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDevicePoolCompatibilityRequest request;
    public GetDevicePoolCompatibilityRequest withRequest(openapisdk.models.shared.GetDevicePoolCompatibilityRequest request) {
        this.request = request;
        return this;
    }
}