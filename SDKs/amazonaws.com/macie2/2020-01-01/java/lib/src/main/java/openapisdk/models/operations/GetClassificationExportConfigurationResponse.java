package openapisdk.models.operations;



public class GetClassificationExportConfigurationResponse {
    public Object accessDeniedException;
    public GetClassificationExportConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetClassificationExportConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetClassificationExportConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetClassificationExportConfigurationResponse getClassificationExportConfigurationResponse;
    public GetClassificationExportConfigurationResponse withGetClassificationExportConfigurationResponse(openapisdk.models.shared.GetClassificationExportConfigurationResponse getClassificationExportConfigurationResponse) {
        this.getClassificationExportConfigurationResponse = getClassificationExportConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public GetClassificationExportConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetClassificationExportConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetClassificationExportConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetClassificationExportConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetClassificationExportConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetClassificationExportConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}