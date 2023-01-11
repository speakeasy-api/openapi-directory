package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugRefsRequest {
    public GetRepositoriesWorkspaceRepoSlugRefsPathParams pathParams;
    public GetRepositoriesWorkspaceRepoSlugRefsRequest withPathParams(GetRepositoriesWorkspaceRepoSlugRefsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRepositoriesWorkspaceRepoSlugRefsQueryParams queryParams;
    public GetRepositoriesWorkspaceRepoSlugRefsRequest withQueryParams(GetRepositoriesWorkspaceRepoSlugRefsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRepositoriesWorkspaceRepoSlugRefsSecurity security;
    public GetRepositoriesWorkspaceRepoSlugRefsRequest withSecurity(GetRepositoriesWorkspaceRepoSlugRefsSecurity security) {
        this.security = security;
        return this;
    }
}