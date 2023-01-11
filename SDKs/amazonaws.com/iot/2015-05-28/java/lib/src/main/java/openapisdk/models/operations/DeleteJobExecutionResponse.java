package openapisdk.models.operations;



public class DeleteJobExecutionResponse {
    public String contentType;
    public DeleteJobExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public DeleteJobExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateTransitionException;
    public DeleteJobExecutionResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteJobExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteJobExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteJobExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteJobExecutionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}