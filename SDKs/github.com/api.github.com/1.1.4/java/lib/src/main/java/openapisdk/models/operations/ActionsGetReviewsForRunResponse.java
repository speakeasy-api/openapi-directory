package openapisdk.models.operations;



public class ActionsGetReviewsForRunResponse {
    public String contentType;
    public ActionsGetReviewsForRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetReviewsForRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EnvironmentApprovals[] environmentApprovals;
    public ActionsGetReviewsForRunResponse withEnvironmentApprovals(openapisdk.models.shared.EnvironmentApprovals[] environmentApprovals) {
        this.environmentApprovals = environmentApprovals;
        return this;
    }
}