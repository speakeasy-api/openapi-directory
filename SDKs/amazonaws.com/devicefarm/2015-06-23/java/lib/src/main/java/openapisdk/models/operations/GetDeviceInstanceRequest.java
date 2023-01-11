package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceInstanceRequest {
    public GetDeviceInstanceHeaders headers;
    public GetDeviceInstanceRequest withHeaders(GetDeviceInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeviceInstanceRequest request;
    public GetDeviceInstanceRequest withRequest(openapisdk.models.shared.GetDeviceInstanceRequest request) {
        this.request = request;
        return this;
    }
}