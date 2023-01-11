package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest {
    public PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest withPathParams(PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity security;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest withSecurity(PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity security) {
        this.security = security;
        return this;
    }
}