package openapisdk.models.operations;



public class StopDeploymentResponse {
    public String contentType;
    public StopDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentAlreadyCompletedException;
    public StopDeploymentResponse withDeploymentAlreadyCompletedException(Object deploymentAlreadyCompletedException) {
        this.deploymentAlreadyCompletedException = deploymentAlreadyCompletedException;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public StopDeploymentResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentGroupDoesNotExistException;
    public StopDeploymentResponse withDeploymentGroupDoesNotExistException(Object deploymentGroupDoesNotExistException) {
        this.deploymentGroupDoesNotExistException = deploymentGroupDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public StopDeploymentResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public StopDeploymentResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Long statusCode;
    public StopDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopDeploymentOutput stopDeploymentOutput;
    public StopDeploymentResponse withStopDeploymentOutput(openapisdk.models.shared.StopDeploymentOutput stopDeploymentOutput) {
        this.stopDeploymentOutput = stopDeploymentOutput;
        return this;
    }
    public Object unsupportedActionForDeploymentTypeException;
    public StopDeploymentResponse withUnsupportedActionForDeploymentTypeException(Object unsupportedActionForDeploymentTypeException) {
        this.unsupportedActionForDeploymentTypeException = unsupportedActionForDeploymentTypeException;
        return this;
    }
}