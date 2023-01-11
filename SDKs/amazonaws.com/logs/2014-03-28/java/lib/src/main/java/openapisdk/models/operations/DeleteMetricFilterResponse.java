package openapisdk.models.operations;



public class DeleteMetricFilterResponse {
    public String contentType;
    public DeleteMetricFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public DeleteMetricFilterResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object operationAbortedException;
    public DeleteMetricFilterResponse withOperationAbortedException(Object operationAbortedException) {
        this.operationAbortedException = operationAbortedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteMetricFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteMetricFilterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteMetricFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}