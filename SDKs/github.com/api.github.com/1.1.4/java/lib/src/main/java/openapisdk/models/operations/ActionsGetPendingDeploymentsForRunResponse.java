package openapisdk.models.operations;



public class ActionsGetPendingDeploymentsForRunResponse {
    public String contentType;
    public ActionsGetPendingDeploymentsForRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetPendingDeploymentsForRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PendingDeployment[] pendingDeployments;
    public ActionsGetPendingDeploymentsForRunResponse withPendingDeployments(openapisdk.models.shared.PendingDeployment[] pendingDeployments) {
        this.pendingDeployments = pendingDeployments;
        return this;
    }
}