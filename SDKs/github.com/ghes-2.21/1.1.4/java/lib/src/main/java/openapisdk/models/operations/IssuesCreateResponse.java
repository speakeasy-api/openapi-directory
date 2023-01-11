package openapisdk.models.operations;



public class IssuesCreateResponse {
    public String contentType;
    public IssuesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesCreateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Issue issue;
    public IssuesCreateResponse withIssue(openapisdk.models.shared.Issue issue) {
        this.issue = issue;
        return this;
    }
    public IssuesCreate503ApplicationJson issuesCreate503ApplicationJSONObject;
    public IssuesCreateResponse withIssuesCreate503ApplicationJsonObject(IssuesCreate503ApplicationJson issuesCreate503ApplicationJSONObject) {
        this.issuesCreate503ApplicationJSONObject = issuesCreate503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesCreateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}