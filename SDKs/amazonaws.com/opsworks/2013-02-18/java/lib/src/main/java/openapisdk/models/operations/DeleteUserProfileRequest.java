package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserProfileRequest {
    public DeleteUserProfileHeaders headers;
    public DeleteUserProfileRequest withHeaders(DeleteUserProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserProfileRequest request;
    public DeleteUserProfileRequest withRequest(openapisdk.models.shared.DeleteUserProfileRequest request) {
        this.request = request;
        return this;
    }
}