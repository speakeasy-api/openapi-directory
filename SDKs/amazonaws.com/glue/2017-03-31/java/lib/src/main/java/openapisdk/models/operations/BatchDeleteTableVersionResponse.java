package openapisdk.models.operations;



public class BatchDeleteTableVersionResponse {
    public openapisdk.models.shared.BatchDeleteTableVersionResponse batchDeleteTableVersionResponse;
    public BatchDeleteTableVersionResponse withBatchDeleteTableVersionResponse(openapisdk.models.shared.BatchDeleteTableVersionResponse batchDeleteTableVersionResponse) {
        this.batchDeleteTableVersionResponse = batchDeleteTableVersionResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteTableVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public BatchDeleteTableVersionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public BatchDeleteTableVersionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchDeleteTableVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchDeleteTableVersionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteTableVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}