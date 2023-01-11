package openapisdk.models.operations;



public class UserGroupsReadRequest {
    public UserGroupsReadPathParams pathParams;
    public UserGroupsReadRequest withPathParams(UserGroupsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserGroupsReadQueryParams queryParams;
    public UserGroupsReadRequest withQueryParams(UserGroupsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserGroupsReadSecurity security;
    public UserGroupsReadRequest withSecurity(UserGroupsReadSecurity security) {
        this.security = security;
        return this;
    }
}