package openapisdk.models.operations;



public class ReposCreateDeploymentStatusResponse {
    public String contentType;
    public ReposCreateDeploymentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateDeploymentStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateDeploymentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DeploymentStatus deploymentStatus;
    public ReposCreateDeploymentStatusResponse withDeploymentStatus(openapisdk.models.shared.DeploymentStatus deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateDeploymentStatusResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}