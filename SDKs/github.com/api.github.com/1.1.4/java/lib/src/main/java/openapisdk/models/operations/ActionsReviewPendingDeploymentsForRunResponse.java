package openapisdk.models.operations;



public class ActionsReviewPendingDeploymentsForRunResponse {
    public String contentType;
    public ActionsReviewPendingDeploymentsForRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsReviewPendingDeploymentsForRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Deployment[] deployments;
    public ActionsReviewPendingDeploymentsForRunResponse withDeployments(openapisdk.models.shared.Deployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
}