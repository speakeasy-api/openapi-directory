package openapisdk.models.operations;



public class GetAuditCategoryResponse {
    public openapisdk.models.shared.AuditCategoryPage auditCategoryPage;
    public GetAuditCategoryResponse withAuditCategoryPage(openapisdk.models.shared.AuditCategoryPage auditCategoryPage) {
        this.auditCategoryPage = auditCategoryPage;
        return this;
    }
    public String contentType;
    public GetAuditCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuditCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}