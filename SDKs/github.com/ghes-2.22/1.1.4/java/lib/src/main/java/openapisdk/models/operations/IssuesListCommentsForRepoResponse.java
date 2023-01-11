package openapisdk.models.operations;



public class IssuesListCommentsForRepoResponse {
    public String contentType;
    public IssuesListCommentsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListCommentsForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListCommentsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListCommentsForRepoResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueComment[] issueComments;
    public IssuesListCommentsForRepoResponse withIssueComments(openapisdk.models.shared.IssueComment[] issueComments) {
        this.issueComments = issueComments;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesListCommentsForRepoResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}