package openapisdk.models.operations;



public class UpdateEnvironmentTemplateResponse {
    public Object accessDeniedException;
    public UpdateEnvironmentTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateEnvironmentTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateEnvironmentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateEnvironmentTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEnvironmentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateEnvironmentTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateEnvironmentTemplateOutput updateEnvironmentTemplateOutput;
    public UpdateEnvironmentTemplateResponse withUpdateEnvironmentTemplateOutput(openapisdk.models.shared.UpdateEnvironmentTemplateOutput updateEnvironmentTemplateOutput) {
        this.updateEnvironmentTemplateOutput = updateEnvironmentTemplateOutput;
        return this;
    }
    public Object validationException;
    public UpdateEnvironmentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}