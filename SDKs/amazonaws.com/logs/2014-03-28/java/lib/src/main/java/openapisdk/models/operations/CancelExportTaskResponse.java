package openapisdk.models.operations;



public class CancelExportTaskResponse {
    public String contentType;
    public CancelExportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidOperationException;
    public CancelExportTaskResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public CancelExportTaskResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelExportTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CancelExportTaskResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CancelExportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}