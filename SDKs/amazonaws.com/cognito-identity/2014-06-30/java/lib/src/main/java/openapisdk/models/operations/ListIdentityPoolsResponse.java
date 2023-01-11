package openapisdk.models.operations;



public class ListIdentityPoolsResponse {
    public String contentType;
    public ListIdentityPoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListIdentityPoolsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListIdentityPoolsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListIdentityPoolsResponse listIdentityPoolsResponse;
    public ListIdentityPoolsResponse withListIdentityPoolsResponse(openapisdk.models.shared.ListIdentityPoolsResponse listIdentityPoolsResponse) {
        this.listIdentityPoolsResponse = listIdentityPoolsResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListIdentityPoolsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIdentityPoolsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListIdentityPoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListIdentityPoolsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}