package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugHooksRequest {
    public GetRepositoriesWorkspaceRepoSlugHooksPathParams pathParams;
    public GetRepositoriesWorkspaceRepoSlugHooksRequest withPathParams(GetRepositoriesWorkspaceRepoSlugHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRepositoriesWorkspaceRepoSlugHooksSecurity security;
    public GetRepositoriesWorkspaceRepoSlugHooksRequest withSecurity(GetRepositoriesWorkspaceRepoSlugHooksSecurity security) {
        this.security = security;
        return this;
    }
}