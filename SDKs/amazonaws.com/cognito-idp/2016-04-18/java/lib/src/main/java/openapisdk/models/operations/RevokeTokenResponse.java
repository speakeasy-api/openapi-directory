package openapisdk.models.operations;



public class RevokeTokenResponse {
    public String contentType;
    public RevokeTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public RevokeTokenResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public RevokeTokenResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public java.util.Map<String, Object> revokeTokenResponse;
    public RevokeTokenResponse withRevokeTokenResponse(java.util.Map<String, Object> revokeTokenResponse) {
        this.revokeTokenResponse = revokeTokenResponse;
        return this;
    }
    public Long statusCode;
    public RevokeTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RevokeTokenResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public RevokeTokenResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object unsupportedOperationException;
    public RevokeTokenResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public Object unsupportedTokenTypeException;
    public RevokeTokenResponse withUnsupportedTokenTypeException(Object unsupportedTokenTypeException) {
        this.unsupportedTokenTypeException = unsupportedTokenTypeException;
        return this;
    }
}