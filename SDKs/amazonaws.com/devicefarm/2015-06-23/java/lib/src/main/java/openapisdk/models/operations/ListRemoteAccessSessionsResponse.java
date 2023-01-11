package openapisdk.models.operations;



public class ListRemoteAccessSessionsResponse {
    public Object argumentException;
    public ListRemoteAccessSessionsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListRemoteAccessSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListRemoteAccessSessionsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListRemoteAccessSessionsResult listRemoteAccessSessionsResult;
    public ListRemoteAccessSessionsResponse withListRemoteAccessSessionsResult(openapisdk.models.shared.ListRemoteAccessSessionsResult listRemoteAccessSessionsResult) {
        this.listRemoteAccessSessionsResult = listRemoteAccessSessionsResult;
        return this;
    }
    public Object notFoundException;
    public ListRemoteAccessSessionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListRemoteAccessSessionsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListRemoteAccessSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}