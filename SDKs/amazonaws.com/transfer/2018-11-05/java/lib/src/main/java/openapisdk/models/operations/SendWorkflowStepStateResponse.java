package openapisdk.models.operations;



public class SendWorkflowStepStateResponse {
    public Object accessDeniedException;
    public SendWorkflowStepStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SendWorkflowStepStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public SendWorkflowStepStateResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public SendWorkflowStepStateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public SendWorkflowStepStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> sendWorkflowStepStateResponse;
    public SendWorkflowStepStateResponse withSendWorkflowStepStateResponse(java.util.Map<String, Object> sendWorkflowStepStateResponse) {
        this.sendWorkflowStepStateResponse = sendWorkflowStepStateResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public SendWorkflowStepStateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public SendWorkflowStepStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SendWorkflowStepStateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}