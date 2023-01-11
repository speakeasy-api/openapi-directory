package openapisdk.models.operations;



public class StopEngagementResponse {
    public Object accessDeniedException;
    public StopEngagementResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StopEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopEngagementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopEngagementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopEngagementResult;
    public StopEngagementResponse withStopEngagementResult(java.util.Map<String, Object> stopEngagementResult) {
        this.stopEngagementResult = stopEngagementResult;
        return this;
    }
    public Object throttlingException;
    public StopEngagementResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StopEngagementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}