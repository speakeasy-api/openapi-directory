package openapisdk.models.operations;



public class UsersAllRequest {
    public UsersAllQueryParams queryParams;
    public UsersAllRequest withQueryParams(UsersAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersAllHeaders headers;
    public UsersAllRequest withHeaders(UsersAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UsersAllSecurity security;
    public UsersAllRequest withSecurity(UsersAllSecurity security) {
        this.security = security;
        return this;
    }
}