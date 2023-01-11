package openapisdk.models.operations;



public class ListDevicePoolsResponse {
    public Object argumentException;
    public ListDevicePoolsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListDevicePoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListDevicePoolsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDevicePoolsResult listDevicePoolsResult;
    public ListDevicePoolsResponse withListDevicePoolsResult(openapisdk.models.shared.ListDevicePoolsResult listDevicePoolsResult) {
        this.listDevicePoolsResult = listDevicePoolsResult;
        return this;
    }
    public Object notFoundException;
    public ListDevicePoolsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListDevicePoolsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListDevicePoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}