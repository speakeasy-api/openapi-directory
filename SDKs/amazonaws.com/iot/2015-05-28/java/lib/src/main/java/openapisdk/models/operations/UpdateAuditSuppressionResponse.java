package openapisdk.models.operations;



public class UpdateAuditSuppressionResponse {
    public String contentType;
    public UpdateAuditSuppressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateAuditSuppressionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAuditSuppressionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAuditSuppressionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAuditSuppressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateAuditSuppressionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateAuditSuppressionResponse;
    public UpdateAuditSuppressionResponse withUpdateAuditSuppressionResponse(java.util.Map<String, Object> updateAuditSuppressionResponse) {
        this.updateAuditSuppressionResponse = updateAuditSuppressionResponse;
        return this;
    }
}