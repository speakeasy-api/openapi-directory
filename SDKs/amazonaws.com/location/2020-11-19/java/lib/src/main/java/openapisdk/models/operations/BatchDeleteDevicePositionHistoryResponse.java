package openapisdk.models.operations;



public class BatchDeleteDevicePositionHistoryResponse {
    public Object accessDeniedException;
    public BatchDeleteDevicePositionHistoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchDeleteDevicePositionHistoryResponse batchDeleteDevicePositionHistoryResponse;
    public BatchDeleteDevicePositionHistoryResponse withBatchDeleteDevicePositionHistoryResponse(openapisdk.models.shared.BatchDeleteDevicePositionHistoryResponse batchDeleteDevicePositionHistoryResponse) {
        this.batchDeleteDevicePositionHistoryResponse = batchDeleteDevicePositionHistoryResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteDevicePositionHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDeleteDevicePositionHistoryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDeleteDevicePositionHistoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteDevicePositionHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDeleteDevicePositionHistoryResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchDeleteDevicePositionHistoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}