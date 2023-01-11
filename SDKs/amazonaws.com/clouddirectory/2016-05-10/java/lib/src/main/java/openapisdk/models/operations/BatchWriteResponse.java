package openapisdk.models.operations;



public class BatchWriteResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public BatchWriteResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchWriteException batchWriteException;
    public BatchWriteResponse withBatchWriteException(openapisdk.models.shared.BatchWriteException batchWriteException) {
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
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public BatchWriteResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public BatchWriteResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public BatchWriteResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public BatchWriteResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public BatchWriteResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public BatchWriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public BatchWriteResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}