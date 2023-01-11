package openapisdk.models.operations;



public class GetIdentityPoolConfigurationResponse {
    public String contentType;
    public GetIdentityPoolConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIdentityPoolConfigurationResponse getIdentityPoolConfigurationResponse;
    public GetIdentityPoolConfigurationResponse withGetIdentityPoolConfigurationResponse(openapisdk.models.shared.GetIdentityPoolConfigurationResponse getIdentityPoolConfigurationResponse) {
        this.getIdentityPoolConfigurationResponse = getIdentityPoolConfigurationResponse;
        return this;
    }
    public Object internalErrorException;
    public GetIdentityPoolConfigurationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetIdentityPoolConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetIdentityPoolConfigurationResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetIdentityPoolConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetIdentityPoolConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetIdentityPoolConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}