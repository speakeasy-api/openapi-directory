package openapisdk.models.operations;



public class IssuesGetEventResponse {
    public String contentType;
    public IssuesGetEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesGetEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesGetEventResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueEvent issueEvent;
    public IssuesGetEventResponse withIssueEvent(openapisdk.models.shared.IssueEvent issueEvent) {
        this.issueEvent = issueEvent;
        return this;
    }
}