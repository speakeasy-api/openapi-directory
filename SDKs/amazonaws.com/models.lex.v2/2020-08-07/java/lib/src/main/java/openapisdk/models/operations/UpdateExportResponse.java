package openapisdk.models.operations;



public class UpdateExportResponse {
    public Object conflictException;
    public UpdateExportResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateExportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateExportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateExportResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateExportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateExportResponse updateExportResponse;
    public UpdateExportResponse withUpdateExportResponse(openapisdk.models.shared.UpdateExportResponse updateExportResponse) {
        this.updateExportResponse = updateExportResponse;
        return this;
    }
    public Object validationException;
    public UpdateExportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}