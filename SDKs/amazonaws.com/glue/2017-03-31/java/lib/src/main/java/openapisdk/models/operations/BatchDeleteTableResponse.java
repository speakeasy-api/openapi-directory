package openapisdk.models.operations;



public class BatchDeleteTableResponse {
    public openapisdk.models.shared.BatchDeleteTableResponse batchDeleteTableResponse;
    public BatchDeleteTableResponse withBatchDeleteTableResponse(openapisdk.models.shared.BatchDeleteTableResponse batchDeleteTableResponse) {
        this.batchDeleteTableResponse = batchDeleteTableResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public BatchDeleteTableResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public BatchDeleteTableResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchDeleteTableResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchDeleteTableResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}