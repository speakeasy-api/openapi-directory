package openapisdk.models.operations;



public class UpdateScheduledAuditResponse {
    public String contentType;
    public UpdateScheduledAuditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateScheduledAuditResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateScheduledAuditResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateScheduledAuditResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateScheduledAuditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateScheduledAuditResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateScheduledAuditResponse updateScheduledAuditResponse;
    public UpdateScheduledAuditResponse withUpdateScheduledAuditResponse(openapisdk.models.shared.UpdateScheduledAuditResponse updateScheduledAuditResponse) {
        this.updateScheduledAuditResponse = updateScheduledAuditResponse;
        return this;
    }
}