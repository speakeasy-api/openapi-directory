package openapisdk.models.operations;



public class CreateServiceTemplateResponse {
    public Object accessDeniedException;
    public CreateServiceTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateServiceTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateServiceTemplateOutput createServiceTemplateOutput;
    public CreateServiceTemplateResponse withCreateServiceTemplateOutput(openapisdk.models.shared.CreateServiceTemplateOutput createServiceTemplateOutput) {
        this.createServiceTemplateOutput = createServiceTemplateOutput;
        return this;
    }
    public Object internalServerException;
    public CreateServiceTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateServiceTemplateResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateServiceTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateServiceTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}