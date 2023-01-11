package openapisdk.models.operations;



public class GetAuditCaseResponse {
    public openapisdk.models.shared.AuditCasePage auditCasePage;
    public GetAuditCaseResponse withAuditCasePage(openapisdk.models.shared.AuditCasePage auditCasePage) {
        this.auditCasePage = auditCasePage;
        return this;
    }
    public String contentType;
    public GetAuditCaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuditCaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}