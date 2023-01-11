package openapisdk.models.operations;



public class ListDeviceInstancesResponse {
    public Object argumentException;
    public ListDeviceInstancesResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListDeviceInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListDeviceInstancesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDeviceInstancesResult listDeviceInstancesResult;
    public ListDeviceInstancesResponse withListDeviceInstancesResult(openapisdk.models.shared.ListDeviceInstancesResult listDeviceInstancesResult) {
        this.listDeviceInstancesResult = listDeviceInstancesResult;
        return this;
    }
    public Object notFoundException;
    public ListDeviceInstancesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListDeviceInstancesResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListDeviceInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}