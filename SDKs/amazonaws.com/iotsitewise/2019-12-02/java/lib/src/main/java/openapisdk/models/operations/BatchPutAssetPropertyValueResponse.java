package openapisdk.models.operations;



public class BatchPutAssetPropertyValueResponse {
    public openapisdk.models.shared.BatchPutAssetPropertyValueResponse batchPutAssetPropertyValueResponse;
    public BatchPutAssetPropertyValueResponse withBatchPutAssetPropertyValueResponse(openapisdk.models.shared.BatchPutAssetPropertyValueResponse batchPutAssetPropertyValueResponse) {
        this.batchPutAssetPropertyValueResponse = batchPutAssetPropertyValueResponse;
        return this;
    }
    public Object conflictingOperationException;
    public BatchPutAssetPropertyValueResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public BatchPutAssetPropertyValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchPutAssetPropertyValueResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchPutAssetPropertyValueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public BatchPutAssetPropertyValueResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchPutAssetPropertyValueResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchPutAssetPropertyValueResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchPutAssetPropertyValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchPutAssetPropertyValueResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}