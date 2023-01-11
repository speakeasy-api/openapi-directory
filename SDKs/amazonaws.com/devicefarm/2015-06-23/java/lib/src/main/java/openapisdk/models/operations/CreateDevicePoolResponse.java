package openapisdk.models.operations;



public class CreateDevicePoolResponse {
    public Object argumentException;
    public CreateDevicePoolResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateDevicePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDevicePoolResult createDevicePoolResult;
    public CreateDevicePoolResponse withCreateDevicePoolResult(openapisdk.models.shared.CreateDevicePoolResult createDevicePoolResult) {
        this.createDevicePoolResult = createDevicePoolResult;
        return this;
    }
    public Object limitExceededException;
    public CreateDevicePoolResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateDevicePoolResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public CreateDevicePoolResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateDevicePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}