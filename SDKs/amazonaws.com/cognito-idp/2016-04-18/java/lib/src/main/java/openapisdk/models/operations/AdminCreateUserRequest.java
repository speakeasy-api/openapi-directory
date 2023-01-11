package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminCreateUserRequest {
    public AdminCreateUserHeaders headers;
    public AdminCreateUserRequest withHeaders(AdminCreateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminCreateUserRequest request;
    public AdminCreateUserRequest withRequest(openapisdk.models.shared.AdminCreateUserRequest request) {
        this.request = request;
        return this;
    }
}