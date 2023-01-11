package openapisdk.models.operations;



public class CancelJobExecutionResponse {
    public String contentType;
    public CancelJobExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public CancelJobExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateTransitionException;
    public CancelJobExecutionResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelJobExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CancelJobExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CancelJobExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelJobExecutionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object versionConflictException;
    public CancelJobExecutionResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}