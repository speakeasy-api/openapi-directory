package openapisdk.models.operations;



public class SearchDevicesResponse {
    public Object accessDeniedException;
    public SearchDevicesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public SearchDevicesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.SearchDevicesResponse searchDevicesResponse;
    public SearchDevicesResponse withSearchDevicesResponse(openapisdk.models.shared.SearchDevicesResponse searchDevicesResponse) {
        this.searchDevicesResponse = searchDevicesResponse;
        return this;
    }
    public Long statusCode;
    public SearchDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchDevicesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SearchDevicesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}