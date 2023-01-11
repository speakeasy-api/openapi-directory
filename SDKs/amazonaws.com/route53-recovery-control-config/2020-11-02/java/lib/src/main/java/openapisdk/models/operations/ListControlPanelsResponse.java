package openapisdk.models.operations;



public class ListControlPanelsResponse {
    public Object accessDeniedException;
    public ListControlPanelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListControlPanelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListControlPanelsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListControlPanelsResponse listControlPanelsResponse;
    public ListControlPanelsResponse withListControlPanelsResponse(openapisdk.models.shared.ListControlPanelsResponse listControlPanelsResponse) {
        this.listControlPanelsResponse = listControlPanelsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListControlPanelsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListControlPanelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListControlPanelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListControlPanelsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}