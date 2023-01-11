package openapisdk.models.operations;



public class PutLifecycleEventHookExecutionStatusResponse {
    public String contentType;
    public PutLifecycleEventHookExecutionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public PutLifecycleEventHookExecutionStatusResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public PutLifecycleEventHookExecutionStatusResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public PutLifecycleEventHookExecutionStatusResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidLifecycleEventHookExecutionIdException;
    public PutLifecycleEventHookExecutionStatusResponse withInvalidLifecycleEventHookExecutionIdException(Object invalidLifecycleEventHookExecutionIdException) {
        this.invalidLifecycleEventHookExecutionIdException = invalidLifecycleEventHookExecutionIdException;
        return this;
    }
    public Object invalidLifecycleEventHookExecutionStatusException;
    public PutLifecycleEventHookExecutionStatusResponse withInvalidLifecycleEventHookExecutionStatusException(Object invalidLifecycleEventHookExecutionStatusException) {
        this.invalidLifecycleEventHookExecutionStatusException = invalidLifecycleEventHookExecutionStatusException;
        return this;
    }
    public Object lifecycleEventAlreadyCompletedException;
    public PutLifecycleEventHookExecutionStatusResponse withLifecycleEventAlreadyCompletedException(Object lifecycleEventAlreadyCompletedException) {
        this.lifecycleEventAlreadyCompletedException = lifecycleEventAlreadyCompletedException;
        return this;
    }
    public openapisdk.models.shared.PutLifecycleEventHookExecutionStatusOutput putLifecycleEventHookExecutionStatusOutput;
    public PutLifecycleEventHookExecutionStatusResponse withPutLifecycleEventHookExecutionStatusOutput(openapisdk.models.shared.PutLifecycleEventHookExecutionStatusOutput putLifecycleEventHookExecutionStatusOutput) {
        this.putLifecycleEventHookExecutionStatusOutput = putLifecycleEventHookExecutionStatusOutput;
        return this;
    }
    public Long statusCode;
    public PutLifecycleEventHookExecutionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedActionForDeploymentTypeException;
    public PutLifecycleEventHookExecutionStatusResponse withUnsupportedActionForDeploymentTypeException(Object unsupportedActionForDeploymentTypeException) {
        this.unsupportedActionForDeploymentTypeException = unsupportedActionForDeploymentTypeException;
        return this;
    }
}