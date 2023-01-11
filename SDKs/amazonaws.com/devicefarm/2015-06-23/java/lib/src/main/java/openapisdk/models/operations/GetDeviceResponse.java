package openapisdk.models.operations;



public class GetDeviceResponse {
    public Object argumentException;
    public GetDeviceResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceResult getDeviceResult;
    public GetDeviceResponse withGetDeviceResult(openapisdk.models.shared.GetDeviceResult getDeviceResult) {
        this.getDeviceResult = getDeviceResult;
        return this;
    }
    public Object limitExceededException;
    public GetDeviceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetDeviceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetDeviceResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}