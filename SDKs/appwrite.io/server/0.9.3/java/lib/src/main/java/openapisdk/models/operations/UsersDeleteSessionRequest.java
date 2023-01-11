package openapisdk.models.operations;



public class UsersDeleteSessionRequest {
    public UsersDeleteSessionPathParams pathParams;
    public UsersDeleteSessionRequest withPathParams(UsersDeleteSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersDeleteSessionSecurity security;
    public UsersDeleteSessionRequest withSecurity(UsersDeleteSessionSecurity security) {
        this.security = security;
        return this;
    }
}