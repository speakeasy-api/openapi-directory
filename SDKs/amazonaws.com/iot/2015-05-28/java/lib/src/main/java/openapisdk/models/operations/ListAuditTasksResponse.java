package openapisdk.models.operations;



public class ListAuditTasksResponse {
    public String contentType;
    public ListAuditTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAuditTasksResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAuditTasksResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAuditTasksResponse listAuditTasksResponse;
    public ListAuditTasksResponse withListAuditTasksResponse(openapisdk.models.shared.ListAuditTasksResponse listAuditTasksResponse) {
        this.listAuditTasksResponse = listAuditTasksResponse;
        return this;
    }
    public Long statusCode;
    public ListAuditTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAuditTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}