package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest {
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest withPathParams(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams queryParams;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest withQueryParams(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity security;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest withSecurity(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity security) {
        this.security = security;
        return this;
    }
}