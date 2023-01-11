package openapisdk.models.operations;



public class GetIdentityProviderByIdentifierResponse {
    public String contentType;
    public GetIdentityProviderByIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIdentityProviderByIdentifierResponse getIdentityProviderByIdentifierResponse;
    public GetIdentityProviderByIdentifierResponse withGetIdentityProviderByIdentifierResponse(openapisdk.models.shared.GetIdentityProviderByIdentifierResponse getIdentityProviderByIdentifierResponse) {
        this.getIdentityProviderByIdentifierResponse = getIdentityProviderByIdentifierResponse;
        return this;
    }
    public Object internalErrorException;
    public GetIdentityProviderByIdentifierResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetIdentityProviderByIdentifierResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetIdentityProviderByIdentifierResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetIdentityProviderByIdentifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetIdentityProviderByIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIdentityProviderByIdentifierResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}