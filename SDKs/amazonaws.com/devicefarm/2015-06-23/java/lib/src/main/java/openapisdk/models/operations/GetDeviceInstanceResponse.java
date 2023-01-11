package openapisdk.models.operations;



public class GetDeviceInstanceResponse {
    public Object argumentException;
    public GetDeviceInstanceResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetDeviceInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceInstanceResult getDeviceInstanceResult;
    public GetDeviceInstanceResponse withGetDeviceInstanceResult(openapisdk.models.shared.GetDeviceInstanceResult getDeviceInstanceResult) {
        this.getDeviceInstanceResult = getDeviceInstanceResult;
        return this;
    }
    public Object limitExceededException;
    public GetDeviceInstanceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetDeviceInstanceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetDeviceInstanceResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetDeviceInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}