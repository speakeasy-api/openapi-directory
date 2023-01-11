package openapisdk.models.operations;



public class UpdateThingShadowResponse {
    public Object conflictException;
    public UpdateThingShadowResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateThingShadowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateThingShadowResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateThingShadowResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object methodNotAllowedException;
    public UpdateThingShadowResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object requestEntityTooLargeException;
    public UpdateThingShadowResponse withRequestEntityTooLargeException(Object requestEntityTooLargeException) {
        this.requestEntityTooLargeException = requestEntityTooLargeException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateThingShadowResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateThingShadowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateThingShadowResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateThingShadowResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object unsupportedDocumentEncodingException;
    public UpdateThingShadowResponse withUnsupportedDocumentEncodingException(Object unsupportedDocumentEncodingException) {
        this.unsupportedDocumentEncodingException = unsupportedDocumentEncodingException;
        return this;
    }
    public openapisdk.models.shared.UpdateThingShadowResponse updateThingShadowResponse;
    public UpdateThingShadowResponse withUpdateThingShadowResponse(openapisdk.models.shared.UpdateThingShadowResponse updateThingShadowResponse) {
        this.updateThingShadowResponse = updateThingShadowResponse;
        return this;
    }
}