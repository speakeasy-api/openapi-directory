package openapisdk.models.operations;



public class GetRemoteAccessSessionResponse {
    public Object argumentException;
    public GetRemoteAccessSessionResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetRemoteAccessSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRemoteAccessSessionResult getRemoteAccessSessionResult;
    public GetRemoteAccessSessionResponse withGetRemoteAccessSessionResult(openapisdk.models.shared.GetRemoteAccessSessionResult getRemoteAccessSessionResult) {
        this.getRemoteAccessSessionResult = getRemoteAccessSessionResult;
        return this;
    }
    public Object limitExceededException;
    public GetRemoteAccessSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetRemoteAccessSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetRemoteAccessSessionResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetRemoteAccessSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}