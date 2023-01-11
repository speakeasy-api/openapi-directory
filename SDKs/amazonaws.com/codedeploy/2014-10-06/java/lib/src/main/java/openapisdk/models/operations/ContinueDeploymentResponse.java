package openapisdk.models.operations;



public class ContinueDeploymentResponse {
    public String contentType;
    public ContinueDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentAlreadyCompletedException;
    public ContinueDeploymentResponse withDeploymentAlreadyCompletedException(Object deploymentAlreadyCompletedException) {
        this.deploymentAlreadyCompletedException = deploymentAlreadyCompletedException;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public ContinueDeploymentResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public ContinueDeploymentResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object deploymentIsNotInReadyStateException;
    public ContinueDeploymentResponse withDeploymentIsNotInReadyStateException(Object deploymentIsNotInReadyStateException) {
        this.deploymentIsNotInReadyStateException = deploymentIsNotInReadyStateException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public ContinueDeploymentResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidDeploymentStatusException;
    public ContinueDeploymentResponse withInvalidDeploymentStatusException(Object invalidDeploymentStatusException) {
        this.invalidDeploymentStatusException = invalidDeploymentStatusException;
        return this;
    }
    public Object invalidDeploymentWaitTypeException;
    public ContinueDeploymentResponse withInvalidDeploymentWaitTypeException(Object invalidDeploymentWaitTypeException) {
        this.invalidDeploymentWaitTypeException = invalidDeploymentWaitTypeException;
        return this;
    }
    public Long statusCode;
    public ContinueDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedActionForDeploymentTypeException;
    public ContinueDeploymentResponse withUnsupportedActionForDeploymentTypeException(Object unsupportedActionForDeploymentTypeException) {
        this.unsupportedActionForDeploymentTypeException = unsupportedActionForDeploymentTypeException;
        return this;
    }
}