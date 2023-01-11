package openapisdk.models.operations;



public class UpdateControlPanelResponse {
    public Object accessDeniedException;
    public UpdateControlPanelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateControlPanelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateControlPanelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateControlPanelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateControlPanelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateControlPanelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateControlPanelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateControlPanelResponse updateControlPanelResponse;
    public UpdateControlPanelResponse withUpdateControlPanelResponse(openapisdk.models.shared.UpdateControlPanelResponse updateControlPanelResponse) {
        this.updateControlPanelResponse = updateControlPanelResponse;
        return this;
    }
    public Object validationException;
    public UpdateControlPanelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}