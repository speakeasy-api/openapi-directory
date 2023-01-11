package openapisdk.models.operations;



public class UsersDeleteRequest {
    public UsersDeletePathParams pathParams;
    public UsersDeleteRequest withPathParams(UsersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersDeleteSecurity security;
    public UsersDeleteRequest withSecurity(UsersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}