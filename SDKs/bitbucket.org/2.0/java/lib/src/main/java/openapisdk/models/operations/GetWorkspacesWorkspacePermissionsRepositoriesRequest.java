package openapisdk.models.operations;



public class GetWorkspacesWorkspacePermissionsRepositoriesRequest {
    public GetWorkspacesWorkspacePermissionsRepositoriesPathParams pathParams;
    public GetWorkspacesWorkspacePermissionsRepositoriesRequest withPathParams(GetWorkspacesWorkspacePermissionsRepositoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspacesWorkspacePermissionsRepositoriesQueryParams queryParams;
    public GetWorkspacesWorkspacePermissionsRepositoriesRequest withQueryParams(GetWorkspacesWorkspacePermissionsRepositoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspacesWorkspacePermissionsRepositoriesSecurity security;
    public GetWorkspacesWorkspacePermissionsRepositoriesRequest withSecurity(GetWorkspacesWorkspacePermissionsRepositoriesSecurity security) {
        this.security = security;
        return this;
    }
}