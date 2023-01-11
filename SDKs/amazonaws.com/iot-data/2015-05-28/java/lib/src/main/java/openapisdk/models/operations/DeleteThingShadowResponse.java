package openapisdk.models.operations;



public class DeleteThingShadowResponse {
    public String contentType;
    public DeleteThingShadowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteThingShadowResponse deleteThingShadowResponse;
    public DeleteThingShadowResponse withDeleteThingShadowResponse(openapisdk.models.shared.DeleteThingShadowResponse deleteThingShadowResponse) {
        this.deleteThingShadowResponse = deleteThingShadowResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteThingShadowResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteThingShadowResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteThingShadowResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteThingShadowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteThingShadowResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteThingShadowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteThingShadowResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteThingShadowResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object unsupportedDocumentEncodingException;
    public DeleteThingShadowResponse withUnsupportedDocumentEncodingException(Object unsupportedDocumentEncodingException) {
        this.unsupportedDocumentEncodingException = unsupportedDocumentEncodingException;
        return this;
    }
}