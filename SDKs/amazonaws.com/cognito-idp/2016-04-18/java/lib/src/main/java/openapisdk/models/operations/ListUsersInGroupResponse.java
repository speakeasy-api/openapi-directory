package openapisdk.models.operations;



public class ListUsersInGroupResponse {
    public String contentType;
    public ListUsersInGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListUsersInGroupResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListUsersInGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListUsersInGroupResponse listUsersInGroupResponse;
    public ListUsersInGroupResponse withListUsersInGroupResponse(openapisdk.models.shared.ListUsersInGroupResponse listUsersInGroupResponse) {
        this.listUsersInGroupResponse = listUsersInGroupResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListUsersInGroupResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListUsersInGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListUsersInGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListUsersInGroupResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}