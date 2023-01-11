package openapisdk.models.operations;



public class StartChangeSetResponse {
    public Object accessDeniedException;
    public StartChangeSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartChangeSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StartChangeSetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public StartChangeSetResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartChangeSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartChangeSetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartChangeSetResponse startChangeSetResponse;
    public StartChangeSetResponse withStartChangeSetResponse(openapisdk.models.shared.StartChangeSetResponse startChangeSetResponse) {
        this.startChangeSetResponse = startChangeSetResponse;
        return this;
    }
    public Long statusCode;
    public StartChangeSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartChangeSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartChangeSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}