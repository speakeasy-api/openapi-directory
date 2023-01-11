package openapisdk.models.operations;



public class StartDataIngestionJobResponse {
    public Object accessDeniedException;
    public StartDataIngestionJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public StartDataIngestionJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartDataIngestionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartDataIngestionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartDataIngestionJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartDataIngestionJobResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartDataIngestionJobResponse startDataIngestionJobResponse;
    public StartDataIngestionJobResponse withStartDataIngestionJobResponse(openapisdk.models.shared.StartDataIngestionJobResponse startDataIngestionJobResponse) {
        this.startDataIngestionJobResponse = startDataIngestionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartDataIngestionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartDataIngestionJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartDataIngestionJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}