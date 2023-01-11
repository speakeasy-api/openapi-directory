package openapisdk.models.operations;



public class DeleteServiceTemplateResponse {
    public Object accessDeniedException;
    public DeleteServiceTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteServiceTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteServiceTemplateOutput deleteServiceTemplateOutput;
    public DeleteServiceTemplateResponse withDeleteServiceTemplateOutput(openapisdk.models.shared.DeleteServiceTemplateOutput deleteServiceTemplateOutput) {
        this.deleteServiceTemplateOutput = deleteServiceTemplateOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteServiceTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteServiceTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteServiceTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteServiceTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}