package openapisdk.models.operations;



public class ReposGetDeploymentResponse {
    public String contentType;
    public ReposGetDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetDeploymentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Deployment deployment;
    public ReposGetDeploymentResponse withDeployment(openapisdk.models.shared.Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
}