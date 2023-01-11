package openapisdk.models.operations;



public class StartExportLabelsTaskRunResponse {
    public String contentType;
    public StartExportLabelsTaskRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartExportLabelsTaskRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartExportLabelsTaskRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartExportLabelsTaskRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartExportLabelsTaskRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.StartExportLabelsTaskRunResponse startExportLabelsTaskRunResponse;
    public StartExportLabelsTaskRunResponse withStartExportLabelsTaskRunResponse(openapisdk.models.shared.StartExportLabelsTaskRunResponse startExportLabelsTaskRunResponse) {
        this.startExportLabelsTaskRunResponse = startExportLabelsTaskRunResponse;
        return this;
    }
    public Long statusCode;
    public StartExportLabelsTaskRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}