package openapisdk.models.operations;



public class StopRemoteAccessSessionResponse {
    public Object argumentException;
    public StopRemoteAccessSessionResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public StopRemoteAccessSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public StopRemoteAccessSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public StopRemoteAccessSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public StopRemoteAccessSessionResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public StopRemoteAccessSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopRemoteAccessSessionResult stopRemoteAccessSessionResult;
    public StopRemoteAccessSessionResponse withStopRemoteAccessSessionResult(openapisdk.models.shared.StopRemoteAccessSessionResult stopRemoteAccessSessionResult) {
        this.stopRemoteAccessSessionResult = stopRemoteAccessSessionResult;
        return this;
    }
}