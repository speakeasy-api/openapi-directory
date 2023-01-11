package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRequest {
    public GetRepositoriesWorkspacePathParams pathParams;
    public GetRepositoriesWorkspaceRequest withPathParams(GetRepositoriesWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRepositoriesWorkspaceQueryParams queryParams;
    public GetRepositoriesWorkspaceRequest withQueryParams(GetRepositoriesWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRepositoriesWorkspaceSecurity security;
    public GetRepositoriesWorkspaceRequest withSecurity(GetRepositoriesWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}