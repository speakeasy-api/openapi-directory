package openapisdk.models.operations;



public class ClearDefaultAuthorizerResponse {
    public java.util.Map<String, Object> clearDefaultAuthorizerResponse;
    public ClearDefaultAuthorizerResponse withClearDefaultAuthorizerResponse(java.util.Map<String, Object> clearDefaultAuthorizerResponse) {
        this.clearDefaultAuthorizerResponse = clearDefaultAuthorizerResponse;
        return this;
    }
    public String contentType;
    public ClearDefaultAuthorizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ClearDefaultAuthorizerResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ClearDefaultAuthorizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public ClearDefaultAuthorizerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ClearDefaultAuthorizerResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ClearDefaultAuthorizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ClearDefaultAuthorizerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ClearDefaultAuthorizerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}