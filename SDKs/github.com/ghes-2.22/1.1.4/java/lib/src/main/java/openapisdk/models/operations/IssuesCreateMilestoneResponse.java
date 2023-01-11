package openapisdk.models.operations;



public class IssuesCreateMilestoneResponse {
    public String contentType;
    public IssuesCreateMilestoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesCreateMilestoneResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesCreateMilestoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesCreateMilestoneResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Milestone milestone;
    public IssuesCreateMilestoneResponse withMilestone(openapisdk.models.shared.Milestone milestone) {
        this.milestone = milestone;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesCreateMilestoneResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}