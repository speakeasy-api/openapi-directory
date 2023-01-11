package openapisdk.models.operations;



public class PutStorageConfigurationResponse {
    public Object conflictingOperationException;
    public PutStorageConfigurationResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public PutStorageConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public PutStorageConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public PutStorageConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public PutStorageConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutStorageConfigurationResponse putStorageConfigurationResponse;
    public PutStorageConfigurationResponse withPutStorageConfigurationResponse(openapisdk.models.shared.PutStorageConfigurationResponse putStorageConfigurationResponse) {
        this.putStorageConfigurationResponse = putStorageConfigurationResponse;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public PutStorageConfigurationResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutStorageConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutStorageConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutStorageConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}