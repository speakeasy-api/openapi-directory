package openapisdk.models.operations;



public class PutDefaultEncryptionConfigurationResponse {
    public Object conflictingOperationException;
    public PutDefaultEncryptionConfigurationResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public PutDefaultEncryptionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public PutDefaultEncryptionConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public PutDefaultEncryptionConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public PutDefaultEncryptionConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutDefaultEncryptionConfigurationResponse putDefaultEncryptionConfigurationResponse;
    public PutDefaultEncryptionConfigurationResponse withPutDefaultEncryptionConfigurationResponse(openapisdk.models.shared.PutDefaultEncryptionConfigurationResponse putDefaultEncryptionConfigurationResponse) {
        this.putDefaultEncryptionConfigurationResponse = putDefaultEncryptionConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public PutDefaultEncryptionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutDefaultEncryptionConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}