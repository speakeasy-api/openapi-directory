package openapisdk.models.operations;



public class ReposListDeploymentsResponse {
    public String contentType;
    public ReposListDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListDeploymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Deployment[] deployments;
    public ReposListDeploymentsResponse withDeployments(openapisdk.models.shared.Deployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
}