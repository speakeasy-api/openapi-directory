package openapisdk.models.operations;



public class CreateDatasetResponse {
    public Object accessDeniedException;
    public CreateDatasetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateDatasetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatasetResponse createDatasetResponse;
    public CreateDatasetResponse withCreateDatasetResponse(openapisdk.models.shared.CreateDatasetResponse createDatasetResponse) {
        this.createDatasetResponse = createDatasetResponse;
        return this;
    }
    public Object internalServerException;
    public CreateDatasetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateDatasetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDatasetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateDatasetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}