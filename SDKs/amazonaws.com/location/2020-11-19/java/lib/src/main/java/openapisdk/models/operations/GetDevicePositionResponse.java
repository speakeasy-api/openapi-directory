package openapisdk.models.operations;



public class GetDevicePositionResponse {
    public Object accessDeniedException;
    public GetDevicePositionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDevicePositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDevicePositionResponse getDevicePositionResponse;
    public GetDevicePositionResponse withGetDevicePositionResponse(openapisdk.models.shared.GetDevicePositionResponse getDevicePositionResponse) {
        this.getDevicePositionResponse = getDevicePositionResponse;
        return this;
    }
    public Object internalServerException;
    public GetDevicePositionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDevicePositionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDevicePositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDevicePositionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetDevicePositionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}