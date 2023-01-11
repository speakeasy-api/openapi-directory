package openapisdk.models.operations;



public class CancelChangeSetResponse {
    public Object accessDeniedException;
    public CancelChangeSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelChangeSetResponse cancelChangeSetResponse;
    public CancelChangeSetResponse withCancelChangeSetResponse(openapisdk.models.shared.CancelChangeSetResponse cancelChangeSetResponse) {
        this.cancelChangeSetResponse = cancelChangeSetResponse;
        return this;
    }
    public String contentType;
    public CancelChangeSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public CancelChangeSetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public CancelChangeSetResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelChangeSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelChangeSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelChangeSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelChangeSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}