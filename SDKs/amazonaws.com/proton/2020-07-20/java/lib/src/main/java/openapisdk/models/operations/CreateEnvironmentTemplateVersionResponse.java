package openapisdk.models.operations;



public class CreateEnvironmentTemplateVersionResponse {
    public Object accessDeniedException;
    public CreateEnvironmentTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateEnvironmentTemplateVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateEnvironmentTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentTemplateVersionOutput createEnvironmentTemplateVersionOutput;
    public CreateEnvironmentTemplateVersionResponse withCreateEnvironmentTemplateVersionOutput(openapisdk.models.shared.CreateEnvironmentTemplateVersionOutput createEnvironmentTemplateVersionOutput) {
        this.createEnvironmentTemplateVersionOutput = createEnvironmentTemplateVersionOutput;
        return this;
    }
    public Object internalServerException;
    public CreateEnvironmentTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateEnvironmentTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateEnvironmentTemplateVersionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateEnvironmentTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateEnvironmentTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}