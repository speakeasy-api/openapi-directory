package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugHooksRequest {
    public PostRepositoriesWorkspaceRepoSlugHooksPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugHooksRequest withPathParams(PostRepositoriesWorkspaceRepoSlugHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugHooksSecurity security;
    public PostRepositoriesWorkspaceRepoSlugHooksRequest withSecurity(PostRepositoriesWorkspaceRepoSlugHooksSecurity security) {
        this.security = security;
        return this;
    }
}