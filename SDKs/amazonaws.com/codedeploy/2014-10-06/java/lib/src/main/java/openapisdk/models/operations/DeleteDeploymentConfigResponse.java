package openapisdk.models.operations;



public class DeleteDeploymentConfigResponse {
    public String contentType;
    public DeleteDeploymentConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentConfigInUseException;
    public DeleteDeploymentConfigResponse withDeploymentConfigInUseException(Object deploymentConfigInUseException) {
        this.deploymentConfigInUseException = deploymentConfigInUseException;
        return this;
    }
    public Object deploymentConfigNameRequiredException;
    public DeleteDeploymentConfigResponse withDeploymentConfigNameRequiredException(Object deploymentConfigNameRequiredException) {
        this.deploymentConfigNameRequiredException = deploymentConfigNameRequiredException;
        return this;
    }
    public Object invalidDeploymentConfigNameException;
    public DeleteDeploymentConfigResponse withInvalidDeploymentConfigNameException(Object invalidDeploymentConfigNameException) {
        this.invalidDeploymentConfigNameException = invalidDeploymentConfigNameException;
        return this;
    }
    public Object invalidOperationException;
    public DeleteDeploymentConfigResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Long statusCode;
    public DeleteDeploymentConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}