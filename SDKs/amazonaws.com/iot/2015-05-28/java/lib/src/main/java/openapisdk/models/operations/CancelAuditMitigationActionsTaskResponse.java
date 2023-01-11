package openapisdk.models.operations;



public class CancelAuditMitigationActionsTaskResponse {
    public java.util.Map<String, Object> cancelAuditMitigationActionsTaskResponse;
    public CancelAuditMitigationActionsTaskResponse withCancelAuditMitigationActionsTaskResponse(java.util.Map<String, Object> cancelAuditMitigationActionsTaskResponse) {
        this.cancelAuditMitigationActionsTaskResponse = cancelAuditMitigationActionsTaskResponse;
        return this;
    }
    public String contentType;
    public CancelAuditMitigationActionsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public CancelAuditMitigationActionsTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CancelAuditMitigationActionsTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelAuditMitigationActionsTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelAuditMitigationActionsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelAuditMitigationActionsTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}