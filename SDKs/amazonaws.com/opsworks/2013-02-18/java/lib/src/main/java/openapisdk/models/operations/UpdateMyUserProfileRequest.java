package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMyUserProfileRequest {
    public UpdateMyUserProfileHeaders headers;
    public UpdateMyUserProfileRequest withHeaders(UpdateMyUserProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMyUserProfileRequest request;
    public UpdateMyUserProfileRequest withRequest(openapisdk.models.shared.UpdateMyUserProfileRequest request) {
        this.request = request;
        return this;
    }
}