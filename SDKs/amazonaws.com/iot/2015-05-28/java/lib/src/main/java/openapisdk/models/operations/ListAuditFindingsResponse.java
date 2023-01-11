package openapisdk.models.operations;



public class ListAuditFindingsResponse {
    public String contentType;
    public ListAuditFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAuditFindingsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAuditFindingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAuditFindingsResponse listAuditFindingsResponse;
    public ListAuditFindingsResponse withListAuditFindingsResponse(openapisdk.models.shared.ListAuditFindingsResponse listAuditFindingsResponse) {
        this.listAuditFindingsResponse = listAuditFindingsResponse;
        return this;
    }
    public Long statusCode;
    public ListAuditFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAuditFindingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}