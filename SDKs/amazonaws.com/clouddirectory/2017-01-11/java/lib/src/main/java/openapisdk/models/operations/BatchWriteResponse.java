package openapisdk.models.operations;



public class BatchWriteResponse {
    public Object accessDeniedException;
    public BatchWriteResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object batchWriteException;
    public BatchWriteResponse withBatchWriteException(Object batchWriteException) {
        this.batchWriteException = batchWriteException;
        return this;
    }
    public openapisdk.models.shared.BatchWriteResponse batchWriteResponse;
    public BatchWriteResponse withBatchWriteResponse(openapisdk.models.shared.BatchWriteResponse batchWriteResponse) {
        this.batchWriteResponse = batchWriteResponse;
        return this;
    }
    public String contentType;
    public BatchWriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public BatchWriteResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public BatchWriteResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public BatchWriteResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public BatchWriteResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object retryableConflictException;
    public BatchWriteResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public BatchWriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchWriteResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}