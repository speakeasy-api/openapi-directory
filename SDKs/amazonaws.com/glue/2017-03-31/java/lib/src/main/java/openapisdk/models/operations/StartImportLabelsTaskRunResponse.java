package openapisdk.models.operations;



public class StartImportLabelsTaskRunResponse {
    public String contentType;
    public StartImportLabelsTaskRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartImportLabelsTaskRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartImportLabelsTaskRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartImportLabelsTaskRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartImportLabelsTaskRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public StartImportLabelsTaskRunResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartImportLabelsTaskRunResponse startImportLabelsTaskRunResponse;
    public StartImportLabelsTaskRunResponse withStartImportLabelsTaskRunResponse(openapisdk.models.shared.StartImportLabelsTaskRunResponse startImportLabelsTaskRunResponse) {
        this.startImportLabelsTaskRunResponse = startImportLabelsTaskRunResponse;
        return this;
    }
    public Long statusCode;
    public StartImportLabelsTaskRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}