package openapisdk.models.operations;



public class IssuesUpdateCommentResponse {
    public String contentType;
    public IssuesUpdateCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesUpdateCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IssueComment issueComment;
    public IssuesUpdateCommentResponse withIssueComment(openapisdk.models.shared.IssueComment issueComment) {
        this.issueComment = issueComment;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesUpdateCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}