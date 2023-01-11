package openapisdk.models.operations;



public class ListUserPoolsResponse {
    public String contentType;
    public ListUserPoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListUserPoolsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListUserPoolsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListUserPoolsResponse listUserPoolsResponse;
    public ListUserPoolsResponse withListUserPoolsResponse(openapisdk.models.shared.ListUserPoolsResponse listUserPoolsResponse) {
        this.listUserPoolsResponse = listUserPoolsResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListUserPoolsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public ListUserPoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListUserPoolsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}