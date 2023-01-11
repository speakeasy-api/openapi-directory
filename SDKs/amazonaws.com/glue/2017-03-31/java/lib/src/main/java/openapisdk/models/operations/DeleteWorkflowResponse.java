package openapisdk.models.operations;



public class DeleteWorkflowResponse {
    public Object concurrentModificationException;
    public DeleteWorkflowResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteWorkflowResponse deleteWorkflowResponse;
    public DeleteWorkflowResponse withDeleteWorkflowResponse(openapisdk.models.shared.DeleteWorkflowResponse deleteWorkflowResponse) {
        this.deleteWorkflowResponse = deleteWorkflowResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteWorkflowResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteWorkflowResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteWorkflowResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}