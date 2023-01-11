package openapisdk.models.operations;



public class GetDeviceResponse {
    public Object accessDeniedException;
    public GetDeviceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deviceOfflineException;
    public GetDeviceResponse withDeviceOfflineException(Object deviceOfflineException) {
        this.deviceOfflineException = deviceOfflineException;
        return this;
    }
    public Object deviceRetiredException;
    public GetDeviceResponse withDeviceRetiredException(Object deviceRetiredException) {
        this.deviceRetiredException = deviceRetiredException;
        return this;
    }
    public openapisdk.models.shared.GetDeviceResponse getDeviceResponse;
    public GetDeviceResponse withGetDeviceResponse(openapisdk.models.shared.GetDeviceResponse getDeviceResponse) {
        this.getDeviceResponse = getDeviceResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDeviceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDeviceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetDeviceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}