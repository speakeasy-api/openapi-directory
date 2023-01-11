package openapisdk.models.operations;



public class IssuesUpdateMilestoneResponse {
    public String contentType;
    public IssuesUpdateMilestoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesUpdateMilestoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Milestone milestone;
    public IssuesUpdateMilestoneResponse withMilestone(openapisdk.models.shared.Milestone milestone) {
        this.milestone = milestone;
        return this;
    }
}