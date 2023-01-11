package openapisdk.models.operations;



public class UserGroupsListRequest {
    public UserGroupsListQueryParams queryParams;
    public UserGroupsListRequest withQueryParams(UserGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserGroupsListSecurity security;
    public UserGroupsListRequest withSecurity(UserGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}