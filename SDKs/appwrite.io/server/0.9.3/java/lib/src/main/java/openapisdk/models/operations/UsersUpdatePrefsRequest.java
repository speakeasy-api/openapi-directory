package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdatePrefsRequest {
    public UsersUpdatePrefsPathParams pathParams;
    public UsersUpdatePrefsRequest withPathParams(UsersUpdatePrefsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersUpdatePrefsRequestBody request;
    public UsersUpdatePrefsRequest withRequest(UsersUpdatePrefsRequestBody request) {
        this.request = request;
        return this;
    }
    public UsersUpdatePrefsSecurity security;
    public UsersUpdatePrefsRequest withSecurity(UsersUpdatePrefsSecurity security) {
        this.security = security;
        return this;
    }
}