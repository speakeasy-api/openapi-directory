package openapisdk.models.operations;



public class IssuesGetResponse {
    public String contentType;
    public IssuesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Issue issue;
    public IssuesGetResponse withIssue(openapisdk.models.shared.Issue issue) {
        this.issue = issue;
        return this;
    }
}