package openapisdk.models.operations;



public class GetWorkspacesWorkspaceRequest {
    public GetWorkspacesWorkspacePathParams pathParams;
    public GetWorkspacesWorkspaceRequest withPathParams(GetWorkspacesWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspacesWorkspaceSecurity security;
    public GetWorkspacesWorkspaceRequest withSecurity(GetWorkspacesWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}