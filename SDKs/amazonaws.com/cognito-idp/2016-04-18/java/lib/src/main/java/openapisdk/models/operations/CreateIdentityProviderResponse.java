package openapisdk.models.operations;



public class CreateIdentityProviderResponse {
    public String contentType;
    public CreateIdentityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateIdentityProviderResponse createIdentityProviderResponse;
    public CreateIdentityProviderResponse withCreateIdentityProviderResponse(openapisdk.models.shared.CreateIdentityProviderResponse createIdentityProviderResponse) {
        this.createIdentityProviderResponse = createIdentityProviderResponse;
        return this;
    }
    public Object duplicateProviderException;
    public CreateIdentityProviderResponse withDuplicateProviderException(Object duplicateProviderException) {
        this.duplicateProviderException = duplicateProviderException;
        return this;
    }
    public Object internalErrorException;
    public CreateIdentityProviderResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateIdentityProviderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateIdentityProviderResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public CreateIdentityProviderResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateIdentityProviderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateIdentityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateIdentityProviderResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}