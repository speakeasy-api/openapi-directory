package openapisdk.models.operations;



public class ListCoreDevicesResponse {
    public Object accessDeniedException;
    public ListCoreDevicesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListCoreDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListCoreDevicesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListCoreDevicesResponse listCoreDevicesResponse;
    public ListCoreDevicesResponse withListCoreDevicesResponse(openapisdk.models.shared.ListCoreDevicesResponse listCoreDevicesResponse) {
        this.listCoreDevicesResponse = listCoreDevicesResponse;
        return this;
    }
    public Long statusCode;
    public ListCoreDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCoreDevicesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListCoreDevicesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}