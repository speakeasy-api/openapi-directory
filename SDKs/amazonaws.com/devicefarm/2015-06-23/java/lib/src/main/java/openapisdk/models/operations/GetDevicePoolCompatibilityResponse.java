package openapisdk.models.operations;



public class GetDevicePoolCompatibilityResponse {
    public Object argumentException;
    public GetDevicePoolCompatibilityResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetDevicePoolCompatibilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDevicePoolCompatibilityResult getDevicePoolCompatibilityResult;
    public GetDevicePoolCompatibilityResponse withGetDevicePoolCompatibilityResult(openapisdk.models.shared.GetDevicePoolCompatibilityResult getDevicePoolCompatibilityResult) {
        this.getDevicePoolCompatibilityResult = getDevicePoolCompatibilityResult;
        return this;
    }
    public Object limitExceededException;
    public GetDevicePoolCompatibilityResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetDevicePoolCompatibilityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetDevicePoolCompatibilityResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetDevicePoolCompatibilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}