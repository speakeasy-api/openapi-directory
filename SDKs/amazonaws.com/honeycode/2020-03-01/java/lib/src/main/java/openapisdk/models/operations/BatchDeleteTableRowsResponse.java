package openapisdk.models.operations;



public class BatchDeleteTableRowsResponse {
    public Object accessDeniedException;
    public BatchDeleteTableRowsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchDeleteTableRowsResult batchDeleteTableRowsResult;
    public BatchDeleteTableRowsResponse withBatchDeleteTableRowsResult(openapisdk.models.shared.BatchDeleteTableRowsResult batchDeleteTableRowsResult) {
        this.batchDeleteTableRowsResult = batchDeleteTableRowsResult;
        return this;
    }
    public String contentType;
    public BatchDeleteTableRowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDeleteTableRowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestTimeoutException;
    public BatchDeleteTableRowsResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDeleteTableRowsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchDeleteTableRowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteTableRowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDeleteTableRowsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchDeleteTableRowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}