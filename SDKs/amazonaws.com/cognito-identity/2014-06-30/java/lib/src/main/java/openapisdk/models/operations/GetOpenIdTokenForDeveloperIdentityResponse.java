package openapisdk.models.operations;



public class GetOpenIdTokenForDeveloperIdentityResponse {
    public String contentType;
    public GetOpenIdTokenForDeveloperIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object developerUserAlreadyRegisteredException;
    public GetOpenIdTokenForDeveloperIdentityResponse withDeveloperUserAlreadyRegisteredException(Object developerUserAlreadyRegisteredException) {
        this.developerUserAlreadyRegisteredException = developerUserAlreadyRegisteredException;
        return this;
    }
    public openapisdk.models.shared.GetOpenIdTokenForDeveloperIdentityResponse getOpenIdTokenForDeveloperIdentityResponse;
    public GetOpenIdTokenForDeveloperIdentityResponse withGetOpenIdTokenForDeveloperIdentityResponse(openapisdk.models.shared.GetOpenIdTokenForDeveloperIdentityResponse getOpenIdTokenForDeveloperIdentityResponse) {
        this.getOpenIdTokenForDeveloperIdentityResponse = getOpenIdTokenForDeveloperIdentityResponse;
        return this;
    }
    public Object internalErrorException;
    public GetOpenIdTokenForDeveloperIdentityResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetOpenIdTokenForDeveloperIdentityResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetOpenIdTokenForDeveloperIdentityResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public GetOpenIdTokenForDeveloperIdentityResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetOpenIdTokenForDeveloperIdentityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetOpenIdTokenForDeveloperIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetOpenIdTokenForDeveloperIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}