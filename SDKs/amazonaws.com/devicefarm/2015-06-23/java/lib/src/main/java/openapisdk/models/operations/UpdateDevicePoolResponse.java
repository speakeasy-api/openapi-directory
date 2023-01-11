package openapisdk.models.operations;



public class UpdateDevicePoolResponse {
    public Object argumentException;
    public UpdateDevicePoolResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateDevicePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateDevicePoolResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateDevicePoolResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateDevicePoolResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateDevicePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateDevicePoolResult updateDevicePoolResult;
    public UpdateDevicePoolResponse withUpdateDevicePoolResult(openapisdk.models.shared.UpdateDevicePoolResult updateDevicePoolResult) {
        this.updateDevicePoolResult = updateDevicePoolResult;
        return this;
    }
}