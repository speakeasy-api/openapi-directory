package openapisdk.models.operations;



public class GetSnippetsWorkspaceRequest {
    public GetSnippetsWorkspacePathParams pathParams;
    public GetSnippetsWorkspaceRequest withPathParams(GetSnippetsWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSnippetsWorkspaceQueryParams queryParams;
    public GetSnippetsWorkspaceRequest withQueryParams(GetSnippetsWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSnippetsWorkspaceSecurity security;
    public GetSnippetsWorkspaceRequest withSecurity(GetSnippetsWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}