package openapisdk.models.operations;



public class PostWorkspacesWorkspaceHooksRequest {
    public PostWorkspacesWorkspaceHooksPathParams pathParams;
    public PostWorkspacesWorkspaceHooksRequest withPathParams(PostWorkspacesWorkspaceHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostWorkspacesWorkspaceHooksSecurity security;
    public PostWorkspacesWorkspaceHooksRequest withSecurity(PostWorkspacesWorkspaceHooksSecurity security) {
        this.security = security;
        return this;
    }
}