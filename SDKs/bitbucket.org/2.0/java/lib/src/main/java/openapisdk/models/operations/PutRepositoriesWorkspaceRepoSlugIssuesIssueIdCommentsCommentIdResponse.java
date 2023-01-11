package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issueComment;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withIssueComment(java.util.Map<String, Object> issueComment) {
        this.issueComment = issueComment;
        return this;
    }
}