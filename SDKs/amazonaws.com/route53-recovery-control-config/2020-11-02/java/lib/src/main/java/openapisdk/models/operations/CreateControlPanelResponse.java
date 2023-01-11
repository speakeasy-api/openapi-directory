package openapisdk.models.operations;



public class CreateControlPanelResponse {
    public Object accessDeniedException;
    public CreateControlPanelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateControlPanelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateControlPanelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateControlPanelResponse createControlPanelResponse;
    public CreateControlPanelResponse withCreateControlPanelResponse(openapisdk.models.shared.CreateControlPanelResponse createControlPanelResponse) {
        this.createControlPanelResponse = createControlPanelResponse;
        return this;
    }
    public Object internalServerException;
    public CreateControlPanelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateControlPanelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateControlPanelResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateControlPanelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateControlPanelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateControlPanelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}