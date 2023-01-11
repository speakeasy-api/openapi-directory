package openapisdk.models.operations;



public class UpdateSecretResponse {
    public String contentType;
    public UpdateSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionFailure;
    public UpdateSecretResponse withEncryptionFailure(Object encryptionFailure) {
        this.encryptionFailure = encryptionFailure;
        return this;
    }
    public Object internalServiceError;
    public UpdateSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public UpdateSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateSecretResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateSecretResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object malformedPolicyDocumentException;
    public UpdateSecretResponse withMalformedPolicyDocumentException(Object malformedPolicyDocumentException) {
        this.malformedPolicyDocumentException = malformedPolicyDocumentException;
        return this;
    }
    public Object preconditionNotMetException;
    public UpdateSecretResponse withPreconditionNotMetException(Object preconditionNotMetException) {
        this.preconditionNotMetException = preconditionNotMetException;
        return this;
    }
    public Object resourceExistsException;
    public UpdateSecretResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSecretResponse updateSecretResponse;
    public UpdateSecretResponse withUpdateSecretResponse(openapisdk.models.shared.UpdateSecretResponse updateSecretResponse) {
        this.updateSecretResponse = updateSecretResponse;
        return this;
    }
}