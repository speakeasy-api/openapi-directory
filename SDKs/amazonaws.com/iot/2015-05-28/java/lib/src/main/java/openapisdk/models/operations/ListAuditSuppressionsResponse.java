package openapisdk.models.operations;



public class ListAuditSuppressionsResponse {
    public String contentType;
    public ListAuditSuppressionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAuditSuppressionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAuditSuppressionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAuditSuppressionsResponse listAuditSuppressionsResponse;
    public ListAuditSuppressionsResponse withListAuditSuppressionsResponse(openapisdk.models.shared.ListAuditSuppressionsResponse listAuditSuppressionsResponse) {
        this.listAuditSuppressionsResponse = listAuditSuppressionsResponse;
        return this;
    }
    public Long statusCode;
    public ListAuditSuppressionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAuditSuppressionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}