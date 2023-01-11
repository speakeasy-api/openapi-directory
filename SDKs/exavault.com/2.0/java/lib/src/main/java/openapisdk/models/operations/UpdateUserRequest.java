package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    public UpdateUserPathParams pathParams;
    public UpdateUserRequest withPathParams(UpdateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateUserHeaders headers;
    public UpdateUserRequest withHeaders(UpdateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateUserUpdateUserRequestBody request;
    public UpdateUserRequest withRequest(UpdateUserUpdateUserRequestBody request) {
        this.request = request;
        return this;
    }
}