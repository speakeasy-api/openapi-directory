package openapisdk.models.operations;



public class StopWorkflowRunResponse {
    public String contentType;
    public StopWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StopWorkflowRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object illegalWorkflowStateException;
    public StopWorkflowRunResponse withIllegalWorkflowStateException(Object illegalWorkflowStateException) {
        this.illegalWorkflowStateException = illegalWorkflowStateException;
        return this;
    }
    public Object internalServiceException;
    public StopWorkflowRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StopWorkflowRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StopWorkflowRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public StopWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopWorkflowRunResponse;
    public StopWorkflowRunResponse withStopWorkflowRunResponse(java.util.Map<String, Object> stopWorkflowRunResponse) {
        this.stopWorkflowRunResponse = stopWorkflowRunResponse;
        return this;
    }
}