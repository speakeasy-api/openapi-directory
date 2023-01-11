package openapisdk.models.operations;



public class ListIdentityProvidersResponse {
    public String contentType;
    public ListIdentityProvidersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListIdentityProvidersResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListIdentityProvidersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListIdentityProvidersResponse listIdentityProvidersResponse;
    public ListIdentityProvidersResponse withListIdentityProvidersResponse(openapisdk.models.shared.ListIdentityProvidersResponse listIdentityProvidersResponse) {
        this.listIdentityProvidersResponse = listIdentityProvidersResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListIdentityProvidersResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIdentityProvidersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListIdentityProvidersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListIdentityProvidersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}