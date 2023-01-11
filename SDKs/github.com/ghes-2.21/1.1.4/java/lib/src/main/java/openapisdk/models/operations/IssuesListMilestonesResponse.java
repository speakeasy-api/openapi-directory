package openapisdk.models.operations;



public class IssuesListMilestonesResponse {
    public String contentType;
    public IssuesListMilestonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListMilestonesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListMilestonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListMilestonesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Milestone[] milestones;
    public IssuesListMilestonesResponse withMilestones(openapisdk.models.shared.Milestone[] milestones) {
        this.milestones = milestones;
        return this;
    }
}