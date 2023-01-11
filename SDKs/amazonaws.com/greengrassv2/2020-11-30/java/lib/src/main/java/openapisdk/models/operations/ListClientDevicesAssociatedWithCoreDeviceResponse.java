package openapisdk.models.operations;



public class ListClientDevicesAssociatedWithCoreDeviceResponse {
    public Object accessDeniedException;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListClientDevicesAssociatedWithCoreDeviceResponse listClientDevicesAssociatedWithCoreDeviceResponse;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withListClientDevicesAssociatedWithCoreDeviceResponse(openapisdk.models.shared.ListClientDevicesAssociatedWithCoreDeviceResponse listClientDevicesAssociatedWithCoreDeviceResponse) {
        this.listClientDevicesAssociatedWithCoreDeviceResponse = listClientDevicesAssociatedWithCoreDeviceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}