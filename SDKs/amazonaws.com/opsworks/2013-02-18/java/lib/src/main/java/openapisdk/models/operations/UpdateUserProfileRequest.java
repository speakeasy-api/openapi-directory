package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserProfileRequest {
    public UpdateUserProfileHeaders headers;
    public UpdateUserProfileRequest withHeaders(UpdateUserProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserProfileRequest request;
    public UpdateUserProfileRequest withRequest(openapisdk.models.shared.UpdateUserProfileRequest request) {
        this.request = request;
        return this;
    }
}