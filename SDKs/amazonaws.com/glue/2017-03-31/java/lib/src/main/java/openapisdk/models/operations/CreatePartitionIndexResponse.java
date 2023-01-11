package openapisdk.models.operations;



public class CreatePartitionIndexResponse {
    public Object alreadyExistsException;
    public CreatePartitionIndexResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreatePartitionIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createPartitionIndexResponse;
    public CreatePartitionIndexResponse withCreatePartitionIndexResponse(java.util.Map<String, Object> createPartitionIndexResponse) {
        this.createPartitionIndexResponse = createPartitionIndexResponse;
        return this;
    }
    public Object entityNotFoundException;
    public CreatePartitionIndexResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public CreatePartitionIndexResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public CreatePartitionIndexResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreatePartitionIndexResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreatePartitionIndexResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreatePartitionIndexResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreatePartitionIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}