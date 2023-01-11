package openapisdk.models.operations;



public class DeleteControlPanelResponse {
    public Object accessDeniedException;
    public DeleteControlPanelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteControlPanelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteControlPanelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteControlPanelResponse;
    public DeleteControlPanelResponse withDeleteControlPanelResponse(java.util.Map<String, Object> deleteControlPanelResponse) {
        this.deleteControlPanelResponse = deleteControlPanelResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteControlPanelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteControlPanelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteControlPanelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteControlPanelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteControlPanelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}