package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserProfileRequest {
    public CreateUserProfileHeaders headers;
    public CreateUserProfileRequest withHeaders(CreateUserProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserProfileRequest request;
    public CreateUserProfileRequest withRequest(openapisdk.models.shared.CreateUserProfileRequest request) {
        this.request = request;
        return this;
    }
}