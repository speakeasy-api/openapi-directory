package openapisdk.models.operations;



public class BatchUpdateTableRowsResponse {
    public Object accessDeniedException;
    public BatchUpdateTableRowsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchUpdateTableRowsResult batchUpdateTableRowsResult;
    public BatchUpdateTableRowsResponse withBatchUpdateTableRowsResult(openapisdk.models.shared.BatchUpdateTableRowsResult batchUpdateTableRowsResult) {
        this.batchUpdateTableRowsResult = batchUpdateTableRowsResult;
        return this;
    }
    public String contentType;
    public BatchUpdateTableRowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchUpdateTableRowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestTimeoutException;
    public BatchUpdateTableRowsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchUpdateTableRowsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchUpdateTableRowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchUpdateTableRowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchUpdateTableRowsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchUpdateTableRowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}