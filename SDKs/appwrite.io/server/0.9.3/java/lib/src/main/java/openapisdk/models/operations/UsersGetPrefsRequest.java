package openapisdk.models.operations;



public class UsersGetPrefsRequest {
    public UsersGetPrefsPathParams pathParams;
    public UsersGetPrefsRequest withPathParams(UsersGetPrefsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersGetPrefsSecurity security;
    public UsersGetPrefsRequest withSecurity(UsersGetPrefsSecurity security) {
        this.security = security;
        return this;
    }
}