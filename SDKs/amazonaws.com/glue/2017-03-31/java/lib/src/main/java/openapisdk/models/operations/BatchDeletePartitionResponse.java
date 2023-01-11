package openapisdk.models.operations;



public class BatchDeletePartitionResponse {
    public openapisdk.models.shared.BatchDeletePartitionResponse batchDeletePartitionResponse;
    public BatchDeletePartitionResponse withBatchDeletePartitionResponse(openapisdk.models.shared.BatchDeletePartitionResponse batchDeletePartitionResponse) {
        this.batchDeletePartitionResponse = batchDeletePartitionResponse;
        return this;
    }
    public String contentType;
    public BatchDeletePartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public BatchDeletePartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public BatchDeletePartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchDeletePartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchDeletePartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchDeletePartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}