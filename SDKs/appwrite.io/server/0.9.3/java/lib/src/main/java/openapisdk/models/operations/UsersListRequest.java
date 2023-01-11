package openapisdk.models.operations;



public class UsersListRequest {
    public UsersListQueryParams queryParams;
    public UsersListRequest withQueryParams(UsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersListSecurity security;
    public UsersListRequest withSecurity(UsersListSecurity security) {
        this.security = security;
        return this;
    }
}