package openapisdk.models.operations;



public class UsersGetRequest {
    public UsersGetPathParams pathParams;
    public UsersGetRequest withPathParams(UsersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersGetSecurity security;
    public UsersGetRequest withSecurity(UsersGetSecurity security) {
        this.security = security;
        return this;
    }
}