package openapisdk.models.operations;



public class UpdateDeviceStateResponse {
    public String contentType;
    public UpdateDeviceStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateDeviceStateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateDeviceStateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDeviceStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDeviceStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDeviceStateResponse;
    public UpdateDeviceStateResponse withUpdateDeviceStateResponse(java.util.Map<String, Object> updateDeviceStateResponse) {
        this.updateDeviceStateResponse = updateDeviceStateResponse;
        return this;
    }
}