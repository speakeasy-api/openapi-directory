package openapisdk.models.operations;



public class IssuesListForAuthenticatedUserResponse {
    public String contentType;
    public IssuesListForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Issue[] issues;
    public IssuesListForAuthenticatedUserResponse withIssues(openapisdk.models.shared.Issue[] issues) {
        this.issues = issues;
        return this;
    }
}