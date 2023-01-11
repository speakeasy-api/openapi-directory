package openapisdk.models.operations;



public class BatchUpdatePartitionResponse {
    public openapisdk.models.shared.BatchUpdatePartitionResponse batchUpdatePartitionResponse;
    public BatchUpdatePartitionResponse withBatchUpdatePartitionResponse(openapisdk.models.shared.BatchUpdatePartitionResponse batchUpdatePartitionResponse) {
        this.batchUpdatePartitionResponse = batchUpdatePartitionResponse;
        return this;
    }
    public String contentType;
    public BatchUpdatePartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public BatchUpdatePartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public BatchUpdatePartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public BatchUpdatePartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchUpdatePartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchUpdatePartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchUpdatePartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}