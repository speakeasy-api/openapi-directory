package openapisdk.models.operations;



public class ListDevicePositionsResponse {
    public Object accessDeniedException;
    public ListDevicePositionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDevicePositionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDevicePositionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListDevicePositionsResponse listDevicePositionsResponse;
    public ListDevicePositionsResponse withListDevicePositionsResponse(openapisdk.models.shared.ListDevicePositionsResponse listDevicePositionsResponse) {
        this.listDevicePositionsResponse = listDevicePositionsResponse;
        return this;
    }
    public Long statusCode;
    public ListDevicePositionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDevicePositionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDevicePositionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}