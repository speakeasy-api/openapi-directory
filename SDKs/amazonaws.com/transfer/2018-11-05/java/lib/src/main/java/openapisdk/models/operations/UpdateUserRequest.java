package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    public UpdateUserHeaders headers;
    public UpdateUserRequest withHeaders(UpdateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserRequest request;
    public UpdateUserRequest withRequest(openapisdk.models.shared.UpdateUserRequest request) {
        this.request = request;
        return this;
    }
}