package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugRefsTagsRequest {
    public PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugRefsTagsRequest withPathParams(PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugRefsTagsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity security;
    public PostRepositoriesWorkspaceRepoSlugRefsTagsRequest withSecurity(PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity security) {
        this.security = security;
        return this;
    }
}