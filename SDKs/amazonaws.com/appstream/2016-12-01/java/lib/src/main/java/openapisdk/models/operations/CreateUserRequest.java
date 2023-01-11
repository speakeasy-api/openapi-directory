package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserRequest {
    public CreateUserHeaders headers;
    public CreateUserRequest withHeaders(CreateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserRequest request;
    public CreateUserRequest withRequest(openapisdk.models.shared.CreateUserRequest request) {
        this.request = request;
        return this;
    }
}