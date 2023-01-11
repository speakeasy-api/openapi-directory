package openapisdk.models.operations;



public class LookupDeveloperIdentityResponse {
    public String contentType;
    public LookupDeveloperIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public LookupDeveloperIdentityResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public LookupDeveloperIdentityResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.LookupDeveloperIdentityResponse lookupDeveloperIdentityResponse;
    public LookupDeveloperIdentityResponse withLookupDeveloperIdentityResponse(openapisdk.models.shared.LookupDeveloperIdentityResponse lookupDeveloperIdentityResponse) {
        this.lookupDeveloperIdentityResponse = lookupDeveloperIdentityResponse;
        return this;
    }
    public Object notAuthorizedException;
    public LookupDeveloperIdentityResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public LookupDeveloperIdentityResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public LookupDeveloperIdentityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public LookupDeveloperIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public LookupDeveloperIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}