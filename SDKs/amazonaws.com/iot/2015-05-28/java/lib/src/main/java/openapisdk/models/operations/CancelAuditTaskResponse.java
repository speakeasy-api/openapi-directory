package openapisdk.models.operations;



public class CancelAuditTaskResponse {
    public java.util.Map<String, Object> cancelAuditTaskResponse;
    public CancelAuditTaskResponse withCancelAuditTaskResponse(java.util.Map<String, Object> cancelAuditTaskResponse) {
        this.cancelAuditTaskResponse = cancelAuditTaskResponse;
        return this;
    }
    public String contentType;
    public CancelAuditTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public CancelAuditTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CancelAuditTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelAuditTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelAuditTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelAuditTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}