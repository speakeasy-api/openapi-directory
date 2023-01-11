package openapisdk.models.operations;



public class UsersDeleteRequest {
    public UsersDeletePathParams pathParams;
    public UsersDeleteRequest withPathParams(UsersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersDeleteQueryParams queryParams;
    public UsersDeleteRequest withQueryParams(UsersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersDeleteHeaders headers;
    public UsersDeleteRequest withHeaders(UsersDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UsersDeleteSecurity security;
    public UsersDeleteRequest withSecurity(UsersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}