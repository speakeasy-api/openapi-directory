package openapisdk.models.operations;



public class PutSecretValueResponse {
    public String contentType;
    public PutSecretValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionFailure;
    public PutSecretValueResponse withEncryptionFailure(Object encryptionFailure) {
        this.encryptionFailure = encryptionFailure;
        return this;
    }
    public Object internalServiceError;
    public PutSecretValueResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public PutSecretValueResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public PutSecretValueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public PutSecretValueResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutSecretValueResponse putSecretValueResponse;
    public PutSecretValueResponse withPutSecretValueResponse(openapisdk.models.shared.PutSecretValueResponse putSecretValueResponse) {
        this.putSecretValueResponse = putSecretValueResponse;
        return this;
    }
    public Object resourceExistsException;
    public PutSecretValueResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutSecretValueResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutSecretValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}