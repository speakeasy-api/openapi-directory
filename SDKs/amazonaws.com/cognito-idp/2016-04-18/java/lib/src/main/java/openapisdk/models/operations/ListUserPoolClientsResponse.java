package openapisdk.models.operations;



public class ListUserPoolClientsResponse {
    public String contentType;
    public ListUserPoolClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListUserPoolClientsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListUserPoolClientsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListUserPoolClientsResponse listUserPoolClientsResponse;
    public ListUserPoolClientsResponse withListUserPoolClientsResponse(openapisdk.models.shared.ListUserPoolClientsResponse listUserPoolClientsResponse) {
        this.listUserPoolClientsResponse = listUserPoolClientsResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListUserPoolClientsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListUserPoolClientsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListUserPoolClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListUserPoolClientsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}