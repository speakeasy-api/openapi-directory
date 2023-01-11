package openapisdk.models.operations;



public class CreateExportResponse {
    public Object conflictException;
    public CreateExportResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateExportResponse createExportResponse;
    public CreateExportResponse withCreateExportResponse(openapisdk.models.shared.CreateExportResponse createExportResponse) {
        this.createExportResponse = createExportResponse;
        return this;
    }
    public Object internalServerException;
    public CreateExportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateExportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateExportResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateExportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateExportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}