package openapisdk.models.operations;



public class BatchUpsertTableRowsResponse {
    public Object accessDeniedException;
    public BatchUpsertTableRowsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchUpsertTableRowsResult batchUpsertTableRowsResult;
    public BatchUpsertTableRowsResponse withBatchUpsertTableRowsResult(openapisdk.models.shared.BatchUpsertTableRowsResult batchUpsertTableRowsResult) {
        this.batchUpsertTableRowsResult = batchUpsertTableRowsResult;
        return this;
    }
    public String contentType;
    public BatchUpsertTableRowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchUpsertTableRowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestTimeoutException;
    public BatchUpsertTableRowsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchUpsertTableRowsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public BatchUpsertTableRowsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchUpsertTableRowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchUpsertTableRowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchUpsertTableRowsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchUpsertTableRowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}