package openapisdk.models.operations;



public class IssuesListResponse {
    public String contentType;
    public IssuesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Issue[] issues;
    public IssuesListResponse withIssues(openapisdk.models.shared.Issue[] issues) {
        this.issues = issues;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesListResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}