package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateRequest {
    public UsersUpdatePathParams pathParams;
    public UsersUpdateRequest withPathParams(UsersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersUpdateQueryParams queryParams;
    public UsersUpdateRequest withQueryParams(UsersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersUpdateHeaders headers;
    public UsersUpdateRequest withHeaders(UsersUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public UsersUpdateRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public UsersUpdateSecurity security;
    public UsersUpdateRequest withSecurity(UsersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}