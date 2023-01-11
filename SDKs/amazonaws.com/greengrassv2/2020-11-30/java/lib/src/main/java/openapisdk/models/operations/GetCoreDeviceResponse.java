package openapisdk.models.operations;



public class GetCoreDeviceResponse {
    public Object accessDeniedException;
    public GetCoreDeviceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetCoreDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCoreDeviceResponse getCoreDeviceResponse;
    public GetCoreDeviceResponse withGetCoreDeviceResponse(openapisdk.models.shared.GetCoreDeviceResponse getCoreDeviceResponse) {
        this.getCoreDeviceResponse = getCoreDeviceResponse;
        return this;
    }
    public Object internalServerException;
    public GetCoreDeviceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCoreDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCoreDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetCoreDeviceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetCoreDeviceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}