package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugRequest {
    public PostRepositoriesWorkspaceRepoSlugPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugRequest withPathParams(PostRepositoriesWorkspaceRepoSlugPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugSecurity security;
    public PostRepositoriesWorkspaceRepoSlugRequest withSecurity(PostRepositoriesWorkspaceRepoSlugSecurity security) {
        this.security = security;
        return this;
    }
}