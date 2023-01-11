package openapisdk.models.operations;



public class CountOrgaUsersRequest {
    public CountOrgaUsersQueryParams queryParams;
    public CountOrgaUsersRequest withQueryParams(CountOrgaUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CountOrgaUsersSecurity security;
    public CountOrgaUsersRequest withSecurity(CountOrgaUsersSecurity security) {
        this.security = security;
        return this;
    }
}