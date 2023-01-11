package openapisdk.models.operations;



public class GetIdentityPoolRolesResponse {
    public String contentType;
    public GetIdentityPoolRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIdentityPoolRolesResponse getIdentityPoolRolesResponse;
    public GetIdentityPoolRolesResponse withGetIdentityPoolRolesResponse(openapisdk.models.shared.GetIdentityPoolRolesResponse getIdentityPoolRolesResponse) {
        this.getIdentityPoolRolesResponse = getIdentityPoolRolesResponse;
        return this;
    }
    public Object internalErrorException;
    public GetIdentityPoolRolesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetIdentityPoolRolesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetIdentityPoolRolesResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public GetIdentityPoolRolesResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetIdentityPoolRolesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetIdentityPoolRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIdentityPoolRolesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}