package openapisdk.models.operations;



public class IssuesGetCommentResponse {
    public String contentType;
    public IssuesGetCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesGetCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesGetCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueComment issueComment;
    public IssuesGetCommentResponse withIssueComment(openapisdk.models.shared.IssueComment issueComment) {
        this.issueComment = issueComment;
        return this;
    }
}