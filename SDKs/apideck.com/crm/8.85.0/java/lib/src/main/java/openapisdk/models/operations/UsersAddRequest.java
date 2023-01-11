package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddRequest {
    public UsersAddQueryParams queryParams;
    public UsersAddRequest withQueryParams(UsersAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersAddHeaders headers;
    public UsersAddRequest withHeaders(UsersAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public UsersAddRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public UsersAddSecurity security;
    public UsersAddRequest withSecurity(UsersAddSecurity security) {
        this.security = security;
        return this;
    }
}