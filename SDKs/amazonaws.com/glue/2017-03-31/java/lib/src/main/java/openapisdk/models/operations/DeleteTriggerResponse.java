package openapisdk.models.operations;



public class DeleteTriggerResponse {
    public Object concurrentModificationException;
    public DeleteTriggerResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteTriggerResponse deleteTriggerResponse;
    public DeleteTriggerResponse withDeleteTriggerResponse(openapisdk.models.shared.DeleteTriggerResponse deleteTriggerResponse) {
        this.deleteTriggerResponse = deleteTriggerResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteTriggerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteTriggerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteTriggerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}