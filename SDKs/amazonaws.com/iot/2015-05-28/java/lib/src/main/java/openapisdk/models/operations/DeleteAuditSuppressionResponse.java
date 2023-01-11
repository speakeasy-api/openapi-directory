package openapisdk.models.operations;



public class DeleteAuditSuppressionResponse {
    public String contentType;
    public DeleteAuditSuppressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAuditSuppressionResponse;
    public DeleteAuditSuppressionResponse withDeleteAuditSuppressionResponse(java.util.Map<String, Object> deleteAuditSuppressionResponse) {
        this.deleteAuditSuppressionResponse = deleteAuditSuppressionResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteAuditSuppressionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAuditSuppressionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteAuditSuppressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteAuditSuppressionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}