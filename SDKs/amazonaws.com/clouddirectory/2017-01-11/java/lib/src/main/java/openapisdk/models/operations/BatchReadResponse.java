package openapisdk.models.operations;



public class BatchReadResponse {
    public Object accessDeniedException;
    public BatchReadResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchReadResponse batchReadResponse;
    public BatchReadResponse withBatchReadResponse(openapisdk.models.shared.BatchReadResponse batchReadResponse) {
        this.batchReadResponse = batchReadResponse;
        return this;
    }
    public String contentType;
    public BatchReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public BatchReadResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public BatchReadResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public BatchReadResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public BatchReadResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object retryableConflictException;
    public BatchReadResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public BatchReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchReadResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}