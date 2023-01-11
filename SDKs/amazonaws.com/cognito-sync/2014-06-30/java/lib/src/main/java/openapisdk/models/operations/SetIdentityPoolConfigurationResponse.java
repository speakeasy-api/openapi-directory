package openapisdk.models.operations;



public class SetIdentityPoolConfigurationResponse {
    public Object concurrentModificationException;
    public SetIdentityPoolConfigurationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public SetIdentityPoolConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetIdentityPoolConfigurationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public SetIdentityPoolConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SetIdentityPoolConfigurationResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetIdentityPoolConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SetIdentityPoolConfigurationResponse setIdentityPoolConfigurationResponse;
    public SetIdentityPoolConfigurationResponse withSetIdentityPoolConfigurationResponse(openapisdk.models.shared.SetIdentityPoolConfigurationResponse setIdentityPoolConfigurationResponse) {
        this.setIdentityPoolConfigurationResponse = setIdentityPoolConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public SetIdentityPoolConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SetIdentityPoolConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}