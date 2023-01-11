package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePoolRequest {
    public GetDevicePoolHeaders headers;
    public GetDevicePoolRequest withHeaders(GetDevicePoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDevicePoolRequest request;
    public GetDevicePoolRequest withRequest(openapisdk.models.shared.GetDevicePoolRequest request) {
        this.request = request;
        return this;
    }
}