package openapisdk.models.operations;



public class IssuesCreateCommentResponse {
    public String contentType;
    public IssuesCreateCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesCreateCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesCreateCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesCreateCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueComment issueComment;
    public IssuesCreateCommentResponse withIssueComment(openapisdk.models.shared.IssueComment issueComment) {
        this.issueComment = issueComment;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesCreateCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}