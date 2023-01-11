package openapisdk.models.operations;



public class DeleteDevicePoolResponse {
    public Object argumentException;
    public DeleteDevicePoolResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteDevicePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDevicePoolResult;
    public DeleteDevicePoolResponse withDeleteDevicePoolResult(java.util.Map<String, Object> deleteDevicePoolResult) {
        this.deleteDevicePoolResult = deleteDevicePoolResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteDevicePoolResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteDevicePoolResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteDevicePoolResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteDevicePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}