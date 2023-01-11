package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest {
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest withPathParams(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity security;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest withSecurity(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}