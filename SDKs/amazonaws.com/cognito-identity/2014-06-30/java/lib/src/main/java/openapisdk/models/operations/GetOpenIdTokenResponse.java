package openapisdk.models.operations;



public class GetOpenIdTokenResponse {
    public String contentType;
    public GetOpenIdTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object externalServiceException;
    public GetOpenIdTokenResponse withExternalServiceException(Object externalServiceException) {
        this.externalServiceException = externalServiceException;
        return this;
    }
    public openapisdk.models.shared.GetOpenIdTokenResponse getOpenIdTokenResponse;
    public GetOpenIdTokenResponse withGetOpenIdTokenResponse(openapisdk.models.shared.GetOpenIdTokenResponse getOpenIdTokenResponse) {
        this.getOpenIdTokenResponse = getOpenIdTokenResponse;
        return this;
    }
    public Object internalErrorException;
    public GetOpenIdTokenResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetOpenIdTokenResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetOpenIdTokenResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public GetOpenIdTokenResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetOpenIdTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetOpenIdTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetOpenIdTokenResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}