package openapisdk.models.operations;



public class UpdateServiceTemplateResponse {
    public Object accessDeniedException;
    public UpdateServiceTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateServiceTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateServiceTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServiceTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateServiceTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateServiceTemplateOutput updateServiceTemplateOutput;
    public UpdateServiceTemplateResponse withUpdateServiceTemplateOutput(openapisdk.models.shared.UpdateServiceTemplateOutput updateServiceTemplateOutput) {
        this.updateServiceTemplateOutput = updateServiceTemplateOutput;
        return this;
    }
    public Object validationException;
    public UpdateServiceTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}