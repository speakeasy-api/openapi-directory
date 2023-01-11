package openapisdk.models.operations;



public class DeleteRemoteAccessSessionResponse {
    public Object argumentException;
    public DeleteRemoteAccessSessionResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteRemoteAccessSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRemoteAccessSessionResult;
    public DeleteRemoteAccessSessionResponse withDeleteRemoteAccessSessionResult(java.util.Map<String, Object> deleteRemoteAccessSessionResult) {
        this.deleteRemoteAccessSessionResult = deleteRemoteAccessSessionResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteRemoteAccessSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteRemoteAccessSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteRemoteAccessSessionResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteRemoteAccessSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}