package openapisdk.models.operations;



public class DeleteServiceTemplateVersionResponse {
    public Object accessDeniedException;
    public DeleteServiceTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteServiceTemplateVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteServiceTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteServiceTemplateVersionOutput deleteServiceTemplateVersionOutput;
    public DeleteServiceTemplateVersionResponse withDeleteServiceTemplateVersionOutput(openapisdk.models.shared.DeleteServiceTemplateVersionOutput deleteServiceTemplateVersionOutput) {
        this.deleteServiceTemplateVersionOutput = deleteServiceTemplateVersionOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteServiceTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteServiceTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServiceTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteServiceTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteServiceTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}