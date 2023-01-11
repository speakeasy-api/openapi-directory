package openapisdk.models.operations;



public class GetThingShadowResponse {
    public String contentType;
    public GetThingShadowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetThingShadowResponse getThingShadowResponse;
    public GetThingShadowResponse withGetThingShadowResponse(openapisdk.models.shared.GetThingShadowResponse getThingShadowResponse) {
        this.getThingShadowResponse = getThingShadowResponse;
        return this;
    }
    public Object internalFailureException;
    public GetThingShadowResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetThingShadowResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetThingShadowResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetThingShadowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetThingShadowResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetThingShadowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetThingShadowResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetThingShadowResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object unsupportedDocumentEncodingException;
    public GetThingShadowResponse withUnsupportedDocumentEncodingException(Object unsupportedDocumentEncodingException) {
        this.unsupportedDocumentEncodingException = unsupportedDocumentEncodingException;
        return this;
    }
}