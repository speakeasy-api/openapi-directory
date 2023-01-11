package openapisdk.models.operations;



public class GetRetainedMessageResponse {
    public String contentType;
    public GetRetainedMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRetainedMessageResponse getRetainedMessageResponse;
    public GetRetainedMessageResponse withGetRetainedMessageResponse(openapisdk.models.shared.GetRetainedMessageResponse getRetainedMessageResponse) {
        this.getRetainedMessageResponse = getRetainedMessageResponse;
        return this;
    }
    public Object internalFailureException;
    public GetRetainedMessageResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetRetainedMessageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetRetainedMessageResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetRetainedMessageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetRetainedMessageResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetRetainedMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetRetainedMessageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetRetainedMessageResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}