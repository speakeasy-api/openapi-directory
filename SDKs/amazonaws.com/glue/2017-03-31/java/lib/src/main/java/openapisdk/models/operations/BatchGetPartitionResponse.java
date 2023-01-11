package openapisdk.models.operations;



public class BatchGetPartitionResponse {
    public openapisdk.models.shared.BatchGetPartitionResponse batchGetPartitionResponse;
    public BatchGetPartitionResponse withBatchGetPartitionResponse(openapisdk.models.shared.BatchGetPartitionResponse batchGetPartitionResponse) {
        this.batchGetPartitionResponse = batchGetPartitionResponse;
        return this;
    }
    public String contentType;
    public BatchGetPartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public BatchGetPartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public BatchGetPartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public BatchGetPartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchGetPartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetPartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetPartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}