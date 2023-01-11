package openapisdk.models.operations;



public class ListAuditMitigationActionsExecutionsResponse {
    public String contentType;
    public ListAuditMitigationActionsExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAuditMitigationActionsExecutionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAuditMitigationActionsExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAuditMitigationActionsExecutionsResponse listAuditMitigationActionsExecutionsResponse;
    public ListAuditMitigationActionsExecutionsResponse withListAuditMitigationActionsExecutionsResponse(openapisdk.models.shared.ListAuditMitigationActionsExecutionsResponse listAuditMitigationActionsExecutionsResponse) {
        this.listAuditMitigationActionsExecutionsResponse = listAuditMitigationActionsExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public ListAuditMitigationActionsExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAuditMitigationActionsExecutionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}