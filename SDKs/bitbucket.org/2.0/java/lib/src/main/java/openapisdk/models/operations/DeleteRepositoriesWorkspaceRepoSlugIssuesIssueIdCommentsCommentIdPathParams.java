package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_id")
    public String issueId;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}