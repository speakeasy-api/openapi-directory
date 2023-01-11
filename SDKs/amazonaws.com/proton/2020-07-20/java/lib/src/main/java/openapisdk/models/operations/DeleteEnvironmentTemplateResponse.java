package openapisdk.models.operations;



public class DeleteEnvironmentTemplateResponse {
    public Object accessDeniedException;
    public DeleteEnvironmentTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteEnvironmentTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteEnvironmentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEnvironmentTemplateOutput deleteEnvironmentTemplateOutput;
    public DeleteEnvironmentTemplateResponse withDeleteEnvironmentTemplateOutput(openapisdk.models.shared.DeleteEnvironmentTemplateOutput deleteEnvironmentTemplateOutput) {
        this.deleteEnvironmentTemplateOutput = deleteEnvironmentTemplateOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteEnvironmentTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEnvironmentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteEnvironmentTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteEnvironmentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}