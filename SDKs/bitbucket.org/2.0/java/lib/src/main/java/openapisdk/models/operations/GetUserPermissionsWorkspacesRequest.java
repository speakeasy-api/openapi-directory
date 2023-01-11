package openapisdk.models.operations;



public class GetUserPermissionsWorkspacesRequest {
    public GetUserPermissionsWorkspacesQueryParams queryParams;
    public GetUserPermissionsWorkspacesRequest withQueryParams(GetUserPermissionsWorkspacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserPermissionsWorkspacesSecurity security;
    public GetUserPermissionsWorkspacesRequest withSecurity(GetUserPermissionsWorkspacesSecurity security) {
        this.security = security;
        return this;
    }
}