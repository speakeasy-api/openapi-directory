package openapisdk.models.operations;



public class GetAuditPrimaryCategoryResponse {
    public openapisdk.models.shared.AuditPrimaryCategoryPage auditPrimaryCategoryPage;
    public GetAuditPrimaryCategoryResponse withAuditPrimaryCategoryPage(openapisdk.models.shared.AuditPrimaryCategoryPage auditPrimaryCategoryPage) {
        this.auditPrimaryCategoryPage = auditPrimaryCategoryPage;
        return this;
    }
    public String contentType;
    public GetAuditPrimaryCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuditPrimaryCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}