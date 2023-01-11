package openapisdk.models.operations;



public class GetTeamsUsernamePermissionsRequest {
    public GetTeamsUsernamePermissionsPathParams pathParams;
    public GetTeamsUsernamePermissionsRequest withPathParams(GetTeamsUsernamePermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernamePermissionsQueryParams queryParams;
    public GetTeamsUsernamePermissionsRequest withQueryParams(GetTeamsUsernamePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTeamsUsernamePermissionsSecurity security;
    public GetTeamsUsernamePermissionsRequest withSecurity(GetTeamsUsernamePermissionsSecurity security) {
        this.security = security;
        return this;
    }
}