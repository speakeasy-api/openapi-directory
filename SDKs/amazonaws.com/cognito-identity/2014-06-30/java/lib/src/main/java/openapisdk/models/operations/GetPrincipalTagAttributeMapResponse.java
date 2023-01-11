package openapisdk.models.operations;



public class GetPrincipalTagAttributeMapResponse {
    public String contentType;
    public GetPrincipalTagAttributeMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPrincipalTagAttributeMapResponse getPrincipalTagAttributeMapResponse;
    public GetPrincipalTagAttributeMapResponse withGetPrincipalTagAttributeMapResponse(openapisdk.models.shared.GetPrincipalTagAttributeMapResponse getPrincipalTagAttributeMapResponse) {
        this.getPrincipalTagAttributeMapResponse = getPrincipalTagAttributeMapResponse;
        return this;
    }
    public Object internalErrorException;
    public GetPrincipalTagAttributeMapResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetPrincipalTagAttributeMapResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetPrincipalTagAttributeMapResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPrincipalTagAttributeMapResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPrincipalTagAttributeMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetPrincipalTagAttributeMapResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}