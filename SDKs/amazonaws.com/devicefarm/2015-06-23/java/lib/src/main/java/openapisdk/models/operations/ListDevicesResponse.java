package openapisdk.models.operations;



public class ListDevicesResponse {
    public Object argumentException;
    public ListDevicesResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListDevicesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDevicesResult listDevicesResult;
    public ListDevicesResponse withListDevicesResult(openapisdk.models.shared.ListDevicesResult listDevicesResult) {
        this.listDevicesResult = listDevicesResult;
        return this;
    }
    public Object notFoundException;
    public ListDevicesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListDevicesResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}