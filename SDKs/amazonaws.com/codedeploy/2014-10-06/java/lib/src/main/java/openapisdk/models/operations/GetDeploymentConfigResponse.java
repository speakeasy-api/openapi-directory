package openapisdk.models.operations;



public class GetDeploymentConfigResponse {
    public String contentType;
    public GetDeploymentConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentConfigDoesNotExistException;
    public GetDeploymentConfigResponse withDeploymentConfigDoesNotExistException(Object deploymentConfigDoesNotExistException) {
        this.deploymentConfigDoesNotExistException = deploymentConfigDoesNotExistException;
        return this;
    }
    public Object deploymentConfigNameRequiredException;
    public GetDeploymentConfigResponse withDeploymentConfigNameRequiredException(Object deploymentConfigNameRequiredException) {
        this.deploymentConfigNameRequiredException = deploymentConfigNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentConfigOutput getDeploymentConfigOutput;
    public GetDeploymentConfigResponse withGetDeploymentConfigOutput(openapisdk.models.shared.GetDeploymentConfigOutput getDeploymentConfigOutput) {
        this.getDeploymentConfigOutput = getDeploymentConfigOutput;
        return this;
    }
    public Object invalidComputePlatformException;
    public GetDeploymentConfigResponse withInvalidComputePlatformException(Object invalidComputePlatformException) {
        this.invalidComputePlatformException = invalidComputePlatformException;
        return this;
    }
    public Object invalidDeploymentConfigNameException;
    public GetDeploymentConfigResponse withInvalidDeploymentConfigNameException(Object invalidDeploymentConfigNameException) {
        this.invalidDeploymentConfigNameException = invalidDeploymentConfigNameException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}