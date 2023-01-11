package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest {
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams pathParams;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest withPathParams(PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity security;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest withSecurity(PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity security) {
        this.security = security;
        return this;
    }
}