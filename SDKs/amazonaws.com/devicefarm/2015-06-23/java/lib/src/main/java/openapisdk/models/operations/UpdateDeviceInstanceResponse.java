package openapisdk.models.operations;



public class UpdateDeviceInstanceResponse {
    public Object argumentException;
    public UpdateDeviceInstanceResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateDeviceInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateDeviceInstanceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateDeviceInstanceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateDeviceInstanceResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateDeviceInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateDeviceInstanceResult updateDeviceInstanceResult;
    public UpdateDeviceInstanceResponse withUpdateDeviceInstanceResult(openapisdk.models.shared.UpdateDeviceInstanceResult updateDeviceInstanceResult) {
        this.updateDeviceInstanceResult = updateDeviceInstanceResult;
        return this;
    }
}