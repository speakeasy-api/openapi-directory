package openapisdk.models.operations;



public class PutClassificationExportConfigurationResponse {
    public Object accessDeniedException;
    public PutClassificationExportConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutClassificationExportConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutClassificationExportConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutClassificationExportConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutClassificationExportConfigurationResponse putClassificationExportConfigurationResponse;
    public PutClassificationExportConfigurationResponse withPutClassificationExportConfigurationResponse(openapisdk.models.shared.PutClassificationExportConfigurationResponse putClassificationExportConfigurationResponse) {
        this.putClassificationExportConfigurationResponse = putClassificationExportConfigurationResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutClassificationExportConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public PutClassificationExportConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public PutClassificationExportConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutClassificationExportConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutClassificationExportConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}