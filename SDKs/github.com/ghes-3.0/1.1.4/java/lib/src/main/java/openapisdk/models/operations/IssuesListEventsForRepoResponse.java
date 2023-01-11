package openapisdk.models.operations;



public class IssuesListEventsForRepoResponse {
    public String contentType;
    public IssuesListEventsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListEventsForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListEventsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IssueEvent[] issueEvents;
    public IssuesListEventsForRepoResponse withIssueEvents(openapisdk.models.shared.IssueEvent[] issueEvents) {
        this.issueEvents = issueEvents;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesListEventsForRepoResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}