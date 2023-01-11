package openapisdk.models.operations;



public class DeleteLogGroupResponse {
    public String contentType;
    public DeleteLogGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public DeleteLogGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object operationAbortedException;
    public DeleteLogGroupResponse withOperationAbortedException(Object operationAbortedException) {
        this.operationAbortedException = operationAbortedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLogGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteLogGroupResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteLogGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}