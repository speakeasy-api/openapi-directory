package openapisdk.models.operations;



public class DeleteScheduledAuditResponse {
    public String contentType;
    public DeleteScheduledAuditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteScheduledAuditResponse;
    public DeleteScheduledAuditResponse withDeleteScheduledAuditResponse(java.util.Map<String, Object> deleteScheduledAuditResponse) {
        this.deleteScheduledAuditResponse = deleteScheduledAuditResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteScheduledAuditResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteScheduledAuditResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteScheduledAuditResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteScheduledAuditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteScheduledAuditResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}