package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateVerificationRequest {
    public UsersUpdateVerificationPathParams pathParams;
    public UsersUpdateVerificationRequest withPathParams(UsersUpdateVerificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersUpdateVerificationRequestBody request;
    public UsersUpdateVerificationRequest withRequest(UsersUpdateVerificationRequestBody request) {
        this.request = request;
        return this;
    }
    public UsersUpdateVerificationSecurity security;
    public UsersUpdateVerificationRequest withSecurity(UsersUpdateVerificationSecurity security) {
        this.security = security;
        return this;
    }
}