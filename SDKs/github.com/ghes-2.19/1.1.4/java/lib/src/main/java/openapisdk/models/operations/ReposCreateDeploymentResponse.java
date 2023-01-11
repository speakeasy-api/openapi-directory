package openapisdk.models.operations;



public class ReposCreateDeploymentResponse {
    public String contentType;
    public ReposCreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Deployment deployment;
    public ReposCreateDeploymentResponse withDeployment(openapisdk.models.shared.Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
    public ReposCreateDeployment202ApplicationJson reposCreateDeployment202ApplicationJSONObject;
    public ReposCreateDeploymentResponse withReposCreateDeployment202ApplicationJsonObject(ReposCreateDeployment202ApplicationJson reposCreateDeployment202ApplicationJSONObject) {
        this.reposCreateDeployment202ApplicationJSONObject = reposCreateDeployment202ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateDeploymentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}