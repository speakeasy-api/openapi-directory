package openapisdk.models.operations;



public class GetUserPoolMfaConfigResponse {
    public String contentType;
    public GetUserPoolMfaConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUserPoolMfaConfigResponse getUserPoolMfaConfigResponse;
    public GetUserPoolMfaConfigResponse withGetUserPoolMfaConfigResponse(openapisdk.models.shared.GetUserPoolMfaConfigResponse getUserPoolMfaConfigResponse) {
        this.getUserPoolMfaConfigResponse = getUserPoolMfaConfigResponse;
        return this;
    }
    public Object internalErrorException;
    public GetUserPoolMfaConfigResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetUserPoolMfaConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetUserPoolMfaConfigResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetUserPoolMfaConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetUserPoolMfaConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetUserPoolMfaConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}