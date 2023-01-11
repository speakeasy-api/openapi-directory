package openapisdk.models.operations;



public class BatchCreateTableRowsResponse {
    public Object accessDeniedException;
    public BatchCreateTableRowsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchCreateTableRowsResult batchCreateTableRowsResult;
    public BatchCreateTableRowsResponse withBatchCreateTableRowsResult(openapisdk.models.shared.BatchCreateTableRowsResult batchCreateTableRowsResult) {
        this.batchCreateTableRowsResult = batchCreateTableRowsResult;
        return this;
    }
    public String contentType;
    public BatchCreateTableRowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchCreateTableRowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestTimeoutException;
    public BatchCreateTableRowsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchCreateTableRowsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public BatchCreateTableRowsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchCreateTableRowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchCreateTableRowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchCreateTableRowsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchCreateTableRowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}