package openapisdk.models.operations;



public class GetWorkspacesWorkspaceHooksRequest {
    public GetWorkspacesWorkspaceHooksPathParams pathParams;
    public GetWorkspacesWorkspaceHooksRequest withPathParams(GetWorkspacesWorkspaceHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspacesWorkspaceHooksSecurity security;
    public GetWorkspacesWorkspaceHooksRequest withSecurity(GetWorkspacesWorkspaceHooksSecurity security) {
        this.security = security;
        return this;
    }
}