package openapisdk.models.operations;



public class ListAuditMitigationActionsTasksResponse {
    public String contentType;
    public ListAuditMitigationActionsTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAuditMitigationActionsTasksResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAuditMitigationActionsTasksResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAuditMitigationActionsTasksResponse listAuditMitigationActionsTasksResponse;
    public ListAuditMitigationActionsTasksResponse withListAuditMitigationActionsTasksResponse(openapisdk.models.shared.ListAuditMitigationActionsTasksResponse listAuditMitigationActionsTasksResponse) {
        this.listAuditMitigationActionsTasksResponse = listAuditMitigationActionsTasksResponse;
        return this;
    }
    public Long statusCode;
    public ListAuditMitigationActionsTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAuditMitigationActionsTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}