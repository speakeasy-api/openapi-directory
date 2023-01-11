package openapisdk.models.operations;



public class UnlinkIdentityResponse {
    public String contentType;
    public UnlinkIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object externalServiceException;
    public UnlinkIdentityResponse withExternalServiceException(Object externalServiceException) {
        this.externalServiceException = externalServiceException;
        return this;
    }
    public Object internalErrorException;
    public UnlinkIdentityResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UnlinkIdentityResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public UnlinkIdentityResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public UnlinkIdentityResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public UnlinkIdentityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UnlinkIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UnlinkIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}