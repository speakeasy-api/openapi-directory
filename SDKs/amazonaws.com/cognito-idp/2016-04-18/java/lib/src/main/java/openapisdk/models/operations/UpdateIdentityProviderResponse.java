package openapisdk.models.operations;



public class UpdateIdentityProviderResponse {
    public String contentType;
    public UpdateIdentityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateIdentityProviderResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateIdentityProviderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateIdentityProviderResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateIdentityProviderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateIdentityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateIdentityProviderResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unsupportedIdentityProviderException;
    public UpdateIdentityProviderResponse withUnsupportedIdentityProviderException(Object unsupportedIdentityProviderException) {
        this.unsupportedIdentityProviderException = unsupportedIdentityProviderException;
        return this;
    }
    public openapisdk.models.shared.UpdateIdentityProviderResponse updateIdentityProviderResponse;
    public UpdateIdentityProviderResponse withUpdateIdentityProviderResponse(openapisdk.models.shared.UpdateIdentityProviderResponse updateIdentityProviderResponse) {
        this.updateIdentityProviderResponse = updateIdentityProviderResponse;
        return this;
    }
}