package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInstanceProfileRequest {
    public UpdateInstanceProfileHeaders headers;
    public UpdateInstanceProfileRequest withHeaders(UpdateInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInstanceProfileRequest request;
    public UpdateInstanceProfileRequest withRequest(openapisdk.models.shared.UpdateInstanceProfileRequest request) {
        this.request = request;
        return this;
    }
}