package openapisdk.models.operations;



public class BatchCreatePartitionResponse {
    public Object alreadyExistsException;
    public BatchCreatePartitionResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public openapisdk.models.shared.BatchCreatePartitionResponse batchCreatePartitionResponse;
    public BatchCreatePartitionResponse withBatchCreatePartitionResponse(openapisdk.models.shared.BatchCreatePartitionResponse batchCreatePartitionResponse) {
        this.batchCreatePartitionResponse = batchCreatePartitionResponse;
        return this;
    }
    public String contentType;
    public BatchCreatePartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public BatchCreatePartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public BatchCreatePartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public BatchCreatePartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchCreatePartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchCreatePartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public BatchCreatePartitionResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public BatchCreatePartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}