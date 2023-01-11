package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminDeleteUserRequest {
    public AdminDeleteUserHeaders headers;
    public AdminDeleteUserRequest withHeaders(AdminDeleteUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminDeleteUserRequest request;
    public AdminDeleteUserRequest withRequest(openapisdk.models.shared.AdminDeleteUserRequest request) {
        this.request = request;
        return this;
    }
}