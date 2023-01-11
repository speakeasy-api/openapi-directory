package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest {
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams pathParams;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest withPathParams(DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity security;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest withSecurity(DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity security) {
        this.security = security;
        return this;
    }
}