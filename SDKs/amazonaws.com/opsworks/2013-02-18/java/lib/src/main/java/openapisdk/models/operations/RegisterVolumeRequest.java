package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterVolumeRequest {
    public RegisterVolumeHeaders headers;
    public RegisterVolumeRequest withHeaders(RegisterVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterVolumeRequest request;
    public RegisterVolumeRequest withRequest(openapisdk.models.shared.RegisterVolumeRequest request) {
        this.request = request;
        return this;
    }
}