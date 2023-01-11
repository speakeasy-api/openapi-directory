package openapisdk.models.operations;



public class StartStreamEncryptionResponse {
    public String contentType;
    public StartStreamEncryptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public StartStreamEncryptionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object kmsAccessDeniedException;
    public StartStreamEncryptionResponse withKmsAccessDeniedException(Object kmsAccessDeniedException) {
        this.kmsAccessDeniedException = kmsAccessDeniedException;
        return this;
    }
    public Object kmsDisabledException;
    public StartStreamEncryptionResponse withKmsDisabledException(Object kmsDisabledException) {
        this.kmsDisabledException = kmsDisabledException;
        return this;
    }
    public Object kmsInvalidStateException;
    public StartStreamEncryptionResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object kmsNotFoundException;
    public StartStreamEncryptionResponse withKmsNotFoundException(Object kmsNotFoundException) {
        this.kmsNotFoundException = kmsNotFoundException;
        return this;
    }
    public Object kmsOptInRequired;
    public StartStreamEncryptionResponse withKmsOptInRequired(Object kmsOptInRequired) {
        this.kmsOptInRequired = kmsOptInRequired;
        return this;
    }
    public Object kmsThrottlingException;
    public StartStreamEncryptionResponse withKmsThrottlingException(Object kmsThrottlingException) {
        this.kmsThrottlingException = kmsThrottlingException;
        return this;
    }
    public Object limitExceededException;
    public StartStreamEncryptionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public StartStreamEncryptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartStreamEncryptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StartStreamEncryptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}