package openapisdk.models.operations;



public class UsersOneRequest {
    public UsersOnePathParams pathParams;
    public UsersOneRequest withPathParams(UsersOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersOneQueryParams queryParams;
    public UsersOneRequest withQueryParams(UsersOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersOneHeaders headers;
    public UsersOneRequest withHeaders(UsersOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UsersOneSecurity security;
    public UsersOneRequest withSecurity(UsersOneSecurity security) {
        this.security = security;
        return this;
    }
}