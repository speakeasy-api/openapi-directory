package openapisdk.models.operations;



public class CancelTaskResponse {
    public Object accessDeniedException;
    public CancelTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelTaskOutput cancelTaskOutput;
    public CancelTaskResponse withCancelTaskOutput(openapisdk.models.shared.CancelTaskOutput cancelTaskOutput) {
        this.cancelTaskOutput = cancelTaskOutput;
        return this;
    }
    public String contentType;
    public CancelTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelTaskResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelTaskResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}