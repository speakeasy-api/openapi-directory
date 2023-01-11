package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest {
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams pathParams;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest withPathParams(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams queryParams;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest withQueryParams(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity security;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest withSecurity(GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity security) {
        this.security = security;
        return this;
    }
}