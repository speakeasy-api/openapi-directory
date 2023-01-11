package openapisdk.models.operations;



public class StopHumanLoopResponse {
    public String contentType;
    public StopHumanLoopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopHumanLoopResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopHumanLoopResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopHumanLoopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopHumanLoopResponse;
    public StopHumanLoopResponse withStopHumanLoopResponse(java.util.Map<String, Object> stopHumanLoopResponse) {
        this.stopHumanLoopResponse = stopHumanLoopResponse;
        return this;
    }
    public Object throttlingException;
    public StopHumanLoopResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StopHumanLoopResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}