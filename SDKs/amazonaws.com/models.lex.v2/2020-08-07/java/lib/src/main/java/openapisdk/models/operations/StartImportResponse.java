package openapisdk.models.operations;



public class StartImportResponse {
    public Object conflictException;
    public StartImportResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartImportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartImportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartImportResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartImportResponse startImportResponse;
    public StartImportResponse withStartImportResponse(openapisdk.models.shared.StartImportResponse startImportResponse) {
        this.startImportResponse = startImportResponse;
        return this;
    }
    public Long statusCode;
    public StartImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartImportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartImportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}