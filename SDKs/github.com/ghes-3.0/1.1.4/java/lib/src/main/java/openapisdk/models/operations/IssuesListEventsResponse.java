package openapisdk.models.operations;



public class IssuesListEventsResponse {
    public String contentType;
    public IssuesListEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListEventsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueEventForIssue[] issueEventForIssues;
    public IssuesListEventsResponse withIssueEventForIssues(openapisdk.models.shared.IssueEventForIssue[] issueEventForIssues) {
        this.issueEventForIssues = issueEventForIssues;
        return this;
    }
}