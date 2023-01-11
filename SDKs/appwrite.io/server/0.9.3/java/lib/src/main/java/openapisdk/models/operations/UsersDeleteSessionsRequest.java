package openapisdk.models.operations;



public class UsersDeleteSessionsRequest {
    public UsersDeleteSessionsPathParams pathParams;
    public UsersDeleteSessionsRequest withPathParams(UsersDeleteSessionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersDeleteSessionsSecurity security;
    public UsersDeleteSessionsRequest withSecurity(UsersDeleteSessionsSecurity security) {
        this.security = security;
        return this;
    }
}