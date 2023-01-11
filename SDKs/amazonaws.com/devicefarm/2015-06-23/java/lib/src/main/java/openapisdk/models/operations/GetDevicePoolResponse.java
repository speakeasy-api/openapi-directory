package openapisdk.models.operations;



public class GetDevicePoolResponse {
    public Object argumentException;
    public GetDevicePoolResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetDevicePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDevicePoolResult getDevicePoolResult;
    public GetDevicePoolResponse withGetDevicePoolResult(openapisdk.models.shared.GetDevicePoolResult getDevicePoolResult) {
        this.getDevicePoolResult = getDevicePoolResult;
        return this;
    }
    public Object limitExceededException;
    public GetDevicePoolResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetDevicePoolResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetDevicePoolResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetDevicePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}