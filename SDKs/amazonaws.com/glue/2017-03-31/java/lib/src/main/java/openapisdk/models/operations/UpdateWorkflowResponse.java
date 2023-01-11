package openapisdk.models.operations;



public class UpdateWorkflowResponse {
    public Object concurrentModificationException;
    public UpdateWorkflowResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateWorkflowResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public UpdateWorkflowResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateWorkflowResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateWorkflowResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateWorkflowResponse updateWorkflowResponse;
    public UpdateWorkflowResponse withUpdateWorkflowResponse(openapisdk.models.shared.UpdateWorkflowResponse updateWorkflowResponse) {
        this.updateWorkflowResponse = updateWorkflowResponse;
        return this;
    }
}