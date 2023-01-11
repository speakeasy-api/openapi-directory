package openapisdk.models.operations;



public class UsersGetSessionsRequest {
    public UsersGetSessionsPathParams pathParams;
    public UsersGetSessionsRequest withPathParams(UsersGetSessionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersGetSessionsSecurity security;
    public UsersGetSessionsRequest withSecurity(UsersGetSessionsSecurity security) {
        this.security = security;
        return this;
    }
}