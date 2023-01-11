package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceRequest {
    public GetDeviceHeaders headers;
    public GetDeviceRequest withHeaders(GetDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeviceRequest request;
    public GetDeviceRequest withRequest(openapisdk.models.shared.GetDeviceRequest request) {
        this.request = request;
        return this;
    }
}