package openapisdk.models.operations;



public class SetPrincipalTagAttributeMapResponse {
    public String contentType;
    public SetPrincipalTagAttributeMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetPrincipalTagAttributeMapResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public SetPrincipalTagAttributeMapResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SetPrincipalTagAttributeMapResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetPrincipalTagAttributeMapResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SetPrincipalTagAttributeMapResponse setPrincipalTagAttributeMapResponse;
    public SetPrincipalTagAttributeMapResponse withSetPrincipalTagAttributeMapResponse(openapisdk.models.shared.SetPrincipalTagAttributeMapResponse setPrincipalTagAttributeMapResponse) {
        this.setPrincipalTagAttributeMapResponse = setPrincipalTagAttributeMapResponse;
        return this;
    }
    public Long statusCode;
    public SetPrincipalTagAttributeMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SetPrincipalTagAttributeMapResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}