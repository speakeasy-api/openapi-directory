package openapisdk.models.operations;



public class DeleteEnvironmentTemplateVersionResponse {
    public Object accessDeniedException;
    public DeleteEnvironmentTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteEnvironmentTemplateVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteEnvironmentTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEnvironmentTemplateVersionOutput deleteEnvironmentTemplateVersionOutput;
    public DeleteEnvironmentTemplateVersionResponse withDeleteEnvironmentTemplateVersionOutput(openapisdk.models.shared.DeleteEnvironmentTemplateVersionOutput deleteEnvironmentTemplateVersionOutput) {
        this.deleteEnvironmentTemplateVersionOutput = deleteEnvironmentTemplateVersionOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteEnvironmentTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEnvironmentTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteEnvironmentTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteEnvironmentTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}