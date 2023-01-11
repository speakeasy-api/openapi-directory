package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignOutUserRequest {
    public SignOutUserHeaders headers;
    public SignOutUserRequest withHeaders(SignOutUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SignOutUserRequestBody request;
    public SignOutUserRequest withRequest(SignOutUserRequestBody request) {
        this.request = request;
        return this;
    }
}