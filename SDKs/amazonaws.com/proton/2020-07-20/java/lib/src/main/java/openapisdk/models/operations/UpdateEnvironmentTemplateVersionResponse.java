package openapisdk.models.operations;



public class UpdateEnvironmentTemplateVersionResponse {
    public Object accessDeniedException;
    public UpdateEnvironmentTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateEnvironmentTemplateVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateEnvironmentTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateEnvironmentTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEnvironmentTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateEnvironmentTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateEnvironmentTemplateVersionOutput updateEnvironmentTemplateVersionOutput;
    public UpdateEnvironmentTemplateVersionResponse withUpdateEnvironmentTemplateVersionOutput(openapisdk.models.shared.UpdateEnvironmentTemplateVersionOutput updateEnvironmentTemplateVersionOutput) {
        this.updateEnvironmentTemplateVersionOutput = updateEnvironmentTemplateVersionOutput;
        return this;
    }
    public Object validationException;
    public UpdateEnvironmentTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}