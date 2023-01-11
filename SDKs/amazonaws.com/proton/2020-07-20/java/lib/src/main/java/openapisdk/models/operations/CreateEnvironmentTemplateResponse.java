package openapisdk.models.operations;



public class CreateEnvironmentTemplateResponse {
    public Object accessDeniedException;
    public CreateEnvironmentTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateEnvironmentTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateEnvironmentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentTemplateOutput createEnvironmentTemplateOutput;
    public CreateEnvironmentTemplateResponse withCreateEnvironmentTemplateOutput(openapisdk.models.shared.CreateEnvironmentTemplateOutput createEnvironmentTemplateOutput) {
        this.createEnvironmentTemplateOutput = createEnvironmentTemplateOutput;
        return this;
    }
    public Object internalServerException;
    public CreateEnvironmentTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateEnvironmentTemplateResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateEnvironmentTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateEnvironmentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}