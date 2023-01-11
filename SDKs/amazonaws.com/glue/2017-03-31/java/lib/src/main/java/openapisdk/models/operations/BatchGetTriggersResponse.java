package openapisdk.models.operations;



public class BatchGetTriggersResponse {
    public openapisdk.models.shared.BatchGetTriggersResponse batchGetTriggersResponse;
    public BatchGetTriggersResponse withBatchGetTriggersResponse(openapisdk.models.shared.BatchGetTriggersResponse batchGetTriggersResponse) {
        this.batchGetTriggersResponse = batchGetTriggersResponse;
        return this;
    }
    public String contentType;
    public BatchGetTriggersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchGetTriggersResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchGetTriggersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetTriggersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetTriggersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}