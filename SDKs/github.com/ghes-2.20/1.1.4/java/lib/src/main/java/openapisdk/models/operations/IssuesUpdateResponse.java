package openapisdk.models.operations;



public class IssuesUpdateResponse {
    public String contentType;
    public IssuesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesUpdateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Issue issue;
    public IssuesUpdateResponse withIssue(openapisdk.models.shared.Issue issue) {
        this.issue = issue;
        return this;
    }
    public IssuesUpdate503ApplicationJson issuesUpdate503ApplicationJSONObject;
    public IssuesUpdateResponse withIssuesUpdate503ApplicationJsonObject(IssuesUpdate503ApplicationJson issuesUpdate503ApplicationJSONObject) {
        this.issuesUpdate503ApplicationJSONObject = issuesUpdate503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesUpdateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}