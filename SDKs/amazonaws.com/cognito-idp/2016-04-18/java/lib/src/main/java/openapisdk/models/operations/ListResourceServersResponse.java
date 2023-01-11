package openapisdk.models.operations;



public class ListResourceServersResponse {
    public String contentType;
    public ListResourceServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListResourceServersResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListResourceServersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListResourceServersResponse listResourceServersResponse;
    public ListResourceServersResponse withListResourceServersResponse(openapisdk.models.shared.ListResourceServersResponse listResourceServersResponse) {
        this.listResourceServersResponse = listResourceServersResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListResourceServersResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListResourceServersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListResourceServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListResourceServersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}