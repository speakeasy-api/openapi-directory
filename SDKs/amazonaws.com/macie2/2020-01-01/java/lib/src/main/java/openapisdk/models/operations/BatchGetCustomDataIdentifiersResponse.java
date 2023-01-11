package openapisdk.models.operations;



public class BatchGetCustomDataIdentifiersResponse {
    public Object accessDeniedException;
    public BatchGetCustomDataIdentifiersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchGetCustomDataIdentifiersResponse batchGetCustomDataIdentifiersResponse;
    public BatchGetCustomDataIdentifiersResponse withBatchGetCustomDataIdentifiersResponse(openapisdk.models.shared.BatchGetCustomDataIdentifiersResponse batchGetCustomDataIdentifiersResponse) {
        this.batchGetCustomDataIdentifiersResponse = batchGetCustomDataIdentifiersResponse;
        return this;
    }
    public Object conflictException;
    public BatchGetCustomDataIdentifiersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public BatchGetCustomDataIdentifiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchGetCustomDataIdentifiersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchGetCustomDataIdentifiersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public BatchGetCustomDataIdentifiersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public BatchGetCustomDataIdentifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchGetCustomDataIdentifiersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchGetCustomDataIdentifiersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}