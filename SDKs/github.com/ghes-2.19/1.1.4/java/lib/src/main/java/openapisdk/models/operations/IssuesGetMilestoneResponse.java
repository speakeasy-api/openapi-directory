package openapisdk.models.operations;



public class IssuesGetMilestoneResponse {
    public String contentType;
    public IssuesGetMilestoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesGetMilestoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesGetMilestoneResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Milestone milestone;
    public IssuesGetMilestoneResponse withMilestone(openapisdk.models.shared.Milestone milestone) {
        this.milestone = milestone;
        return this;
    }
}