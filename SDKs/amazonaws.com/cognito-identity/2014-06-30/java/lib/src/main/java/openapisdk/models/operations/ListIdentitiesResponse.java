package openapisdk.models.operations;



public class ListIdentitiesResponse {
    public String contentType;
    public ListIdentitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListIdentitiesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListIdentitiesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListIdentitiesResponse listIdentitiesResponse;
    public ListIdentitiesResponse withListIdentitiesResponse(openapisdk.models.shared.ListIdentitiesResponse listIdentitiesResponse) {
        this.listIdentitiesResponse = listIdentitiesResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListIdentitiesResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIdentitiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListIdentitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListIdentitiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}