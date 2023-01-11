package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserRequest {
    public AddUserHeaders headers;
    public AddUserRequest withHeaders(AddUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddUserAddUserRequestBody request;
    public AddUserRequest withRequest(AddUserAddUserRequestBody request) {
        this.request = request;
        return this;
    }
}