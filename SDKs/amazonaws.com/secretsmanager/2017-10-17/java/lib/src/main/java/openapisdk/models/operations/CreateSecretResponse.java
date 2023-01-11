package openapisdk.models.operations;



public class CreateSecretResponse {
    public String contentType;
    public CreateSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSecretResponse createSecretResponse;
    public CreateSecretResponse withCreateSecretResponse(openapisdk.models.shared.CreateSecretResponse createSecretResponse) {
        this.createSecretResponse = createSecretResponse;
        return this;
    }
    public Object encryptionFailure;
    public CreateSecretResponse withEncryptionFailure(Object encryptionFailure) {
        this.encryptionFailure = encryptionFailure;
        return this;
    }
    public Object internalServiceError;
    public CreateSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public CreateSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public CreateSecretResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateSecretResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object malformedPolicyDocumentException;
    public CreateSecretResponse withMalformedPolicyDocumentException(Object malformedPolicyDocumentException) {
        this.malformedPolicyDocumentException = malformedPolicyDocumentException;
        return this;
    }
    public Object preconditionNotMetException;
    public CreateSecretResponse withPreconditionNotMetException(Object preconditionNotMetException) {
        this.preconditionNotMetException = preconditionNotMetException;
        return this;
    }
    public Object resourceExistsException;
    public CreateSecretResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}