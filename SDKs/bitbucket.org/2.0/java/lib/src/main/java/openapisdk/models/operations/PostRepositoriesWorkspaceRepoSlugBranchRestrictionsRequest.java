package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest {
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest withPathParams(PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity security;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest withSecurity(PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity security) {
        this.security = security;
        return this;
    }
}