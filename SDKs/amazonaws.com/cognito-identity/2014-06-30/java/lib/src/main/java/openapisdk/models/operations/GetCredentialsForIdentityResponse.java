package openapisdk.models.operations;



public class GetCredentialsForIdentityResponse {
    public String contentType;
    public GetCredentialsForIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object externalServiceException;
    public GetCredentialsForIdentityResponse withExternalServiceException(Object externalServiceException) {
        this.externalServiceException = externalServiceException;
        return this;
    }
    public openapisdk.models.shared.GetCredentialsForIdentityResponse getCredentialsForIdentityResponse;
    public GetCredentialsForIdentityResponse withGetCredentialsForIdentityResponse(openapisdk.models.shared.GetCredentialsForIdentityResponse getCredentialsForIdentityResponse) {
        this.getCredentialsForIdentityResponse = getCredentialsForIdentityResponse;
        return this;
    }
    public Object internalErrorException;
    public GetCredentialsForIdentityResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidIdentityPoolConfigurationException;
    public GetCredentialsForIdentityResponse withInvalidIdentityPoolConfigurationException(Object invalidIdentityPoolConfigurationException) {
        this.invalidIdentityPoolConfigurationException = invalidIdentityPoolConfigurationException;
        return this;
    }
    public Object invalidParameterException;
    public GetCredentialsForIdentityResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetCredentialsForIdentityResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public GetCredentialsForIdentityResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCredentialsForIdentityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCredentialsForIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetCredentialsForIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}