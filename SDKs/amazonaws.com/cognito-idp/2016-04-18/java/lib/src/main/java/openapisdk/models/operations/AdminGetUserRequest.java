package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminGetUserRequest {
    public AdminGetUserHeaders headers;
    public AdminGetUserRequest withHeaders(AdminGetUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminGetUserRequest request;
    public AdminGetUserRequest withRequest(openapisdk.models.shared.AdminGetUserRequest request) {
        this.request = request;
        return this;
    }
}