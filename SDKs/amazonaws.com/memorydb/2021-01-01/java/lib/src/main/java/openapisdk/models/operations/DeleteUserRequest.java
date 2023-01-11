package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserRequest {
    public DeleteUserHeaders headers;
    public DeleteUserRequest withHeaders(DeleteUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserRequest request;
    public DeleteUserRequest withRequest(openapisdk.models.shared.DeleteUserRequest request) {
        this.request = request;
        return this;
    }
}