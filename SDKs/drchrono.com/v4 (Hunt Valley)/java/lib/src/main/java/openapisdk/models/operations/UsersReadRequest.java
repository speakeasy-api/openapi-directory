package openapisdk.models.operations;



public class UsersReadRequest {
    public UsersReadPathParams pathParams;
    public UsersReadRequest withPathParams(UsersReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersReadQueryParams queryParams;
    public UsersReadRequest withQueryParams(UsersReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersReadSecurity security;
    public UsersReadRequest withSecurity(UsersReadSecurity security) {
        this.security = security;
        return this;
    }
}