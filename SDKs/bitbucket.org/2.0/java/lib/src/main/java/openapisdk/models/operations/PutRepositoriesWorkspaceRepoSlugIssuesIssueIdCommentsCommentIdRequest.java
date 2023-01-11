package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest {
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams pathParams;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest withPathParams(PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity security;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest withSecurity(PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity security) {
        this.security = security;
        return this;
    }
}