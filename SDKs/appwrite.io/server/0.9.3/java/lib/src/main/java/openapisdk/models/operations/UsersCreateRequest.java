package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersCreateRequestBody request;
    public UsersCreateRequest withRequest(UsersCreateRequestBody request) {
        this.request = request;
        return this;
    }
    public UsersCreateSecurity security;
    public UsersCreateRequest withSecurity(UsersCreateSecurity security) {
        this.security = security;
        return this;
    }
}