package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDevicePoolRequest {
    public CreateDevicePoolHeaders headers;
    public CreateDevicePoolRequest withHeaders(CreateDevicePoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDevicePoolRequest request;
    public CreateDevicePoolRequest withRequest(openapisdk.models.shared.CreateDevicePoolRequest request) {
        this.request = request;
        return this;
    }
}