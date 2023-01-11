package openapisdk.models.operations;



public class SkipWaitTimeForInstanceTerminationResponse {
    public String contentType;
    public SkipWaitTimeForInstanceTerminationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentAlreadyCompletedException;
    public SkipWaitTimeForInstanceTerminationResponse withDeploymentAlreadyCompletedException(Object deploymentAlreadyCompletedException) {
        this.deploymentAlreadyCompletedException = deploymentAlreadyCompletedException;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public SkipWaitTimeForInstanceTerminationResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public SkipWaitTimeForInstanceTerminationResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object deploymentNotStartedException;
    public SkipWaitTimeForInstanceTerminationResponse withDeploymentNotStartedException(Object deploymentNotStartedException) {
        this.deploymentNotStartedException = deploymentNotStartedException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public SkipWaitTimeForInstanceTerminationResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Long statusCode;
    public SkipWaitTimeForInstanceTerminationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedActionForDeploymentTypeException;
    public SkipWaitTimeForInstanceTerminationResponse withUnsupportedActionForDeploymentTypeException(Object unsupportedActionForDeploymentTypeException) {
        this.unsupportedActionForDeploymentTypeException = unsupportedActionForDeploymentTypeException;
        return this;
    }
}