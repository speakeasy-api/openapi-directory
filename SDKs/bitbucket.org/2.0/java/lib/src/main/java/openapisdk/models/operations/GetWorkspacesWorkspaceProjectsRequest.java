package openapisdk.models.operations;



public class GetWorkspacesWorkspaceProjectsRequest {
    public GetWorkspacesWorkspaceProjectsPathParams pathParams;
    public GetWorkspacesWorkspaceProjectsRequest withPathParams(GetWorkspacesWorkspaceProjectsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspacesWorkspaceProjectsSecurity security;
    public GetWorkspacesWorkspaceProjectsRequest withSecurity(GetWorkspacesWorkspaceProjectsSecurity security) {
        this.security = security;
        return this;
    }
}