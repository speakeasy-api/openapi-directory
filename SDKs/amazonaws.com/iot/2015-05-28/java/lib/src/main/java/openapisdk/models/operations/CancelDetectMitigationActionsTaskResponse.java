package openapisdk.models.operations;



public class CancelDetectMitigationActionsTaskResponse {
    public java.util.Map<String, Object> cancelDetectMitigationActionsTaskResponse;
    public CancelDetectMitigationActionsTaskResponse withCancelDetectMitigationActionsTaskResponse(java.util.Map<String, Object> cancelDetectMitigationActionsTaskResponse) {
        this.cancelDetectMitigationActionsTaskResponse = cancelDetectMitigationActionsTaskResponse;
        return this;
    }
    public String contentType;
    public CancelDetectMitigationActionsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public CancelDetectMitigationActionsTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CancelDetectMitigationActionsTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelDetectMitigationActionsTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelDetectMitigationActionsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelDetectMitigationActionsTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}