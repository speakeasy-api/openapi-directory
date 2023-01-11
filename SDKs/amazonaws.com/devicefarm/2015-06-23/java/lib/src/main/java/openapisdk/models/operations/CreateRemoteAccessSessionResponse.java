package openapisdk.models.operations;



public class CreateRemoteAccessSessionResponse {
    public Object argumentException;
    public CreateRemoteAccessSessionResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateRemoteAccessSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRemoteAccessSessionResult createRemoteAccessSessionResult;
    public CreateRemoteAccessSessionResponse withCreateRemoteAccessSessionResult(openapisdk.models.shared.CreateRemoteAccessSessionResult createRemoteAccessSessionResult) {
        this.createRemoteAccessSessionResult = createRemoteAccessSessionResult;
        return this;
    }
    public Object limitExceededException;
    public CreateRemoteAccessSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateRemoteAccessSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public CreateRemoteAccessSessionResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateRemoteAccessSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}