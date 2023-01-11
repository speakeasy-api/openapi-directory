package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> issueComment;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse withIssueComment(java.util.Map<String, Object> issueComment) {
        this.issueComment = issueComment;
        return this;
    }
}