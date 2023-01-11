package openapisdk.models.operations;



public class GetDeploymentResponse {
    public String contentType;
    public GetDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public GetDeploymentResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public GetDeploymentResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentOutput getDeploymentOutput;
    public GetDeploymentResponse withGetDeploymentOutput(openapisdk.models.shared.GetDeploymentOutput getDeploymentOutput) {
        this.getDeploymentOutput = getDeploymentOutput;
        return this;
    }
    public Object invalidDeploymentIdException;
    public GetDeploymentResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}