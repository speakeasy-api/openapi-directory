package openapisdk.models.operations;



public class ReposListDeploymentStatusesResponse {
    public String contentType;
    public ReposListDeploymentStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListDeploymentStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListDeploymentStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListDeploymentStatusesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.DeploymentStatus[] deploymentStatuses;
    public ReposListDeploymentStatusesResponse withDeploymentStatuses(openapisdk.models.shared.DeploymentStatus[] deploymentStatuses) {
        this.deploymentStatuses = deploymentStatuses;
        return this;
    }
}