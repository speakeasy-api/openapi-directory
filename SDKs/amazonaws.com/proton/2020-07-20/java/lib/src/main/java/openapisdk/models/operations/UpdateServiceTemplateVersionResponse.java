package openapisdk.models.operations;



public class UpdateServiceTemplateVersionResponse {
    public Object accessDeniedException;
    public UpdateServiceTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateServiceTemplateVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateServiceTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateServiceTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServiceTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateServiceTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateServiceTemplateVersionOutput updateServiceTemplateVersionOutput;
    public UpdateServiceTemplateVersionResponse withUpdateServiceTemplateVersionOutput(openapisdk.models.shared.UpdateServiceTemplateVersionOutput updateServiceTemplateVersionOutput) {
        this.updateServiceTemplateVersionOutput = updateServiceTemplateVersionOutput;
        return this;
    }
    public Object validationException;
    public UpdateServiceTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}