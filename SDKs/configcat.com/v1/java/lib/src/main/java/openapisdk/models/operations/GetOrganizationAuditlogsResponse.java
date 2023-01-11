package openapisdk.models.operations;



public class GetOrganizationAuditlogsResponse {
    public openapisdk.models.shared.AuditLogItemModel[] auditLogItemModels;
    public GetOrganizationAuditlogsResponse withAuditLogItemModels(openapisdk.models.shared.AuditLogItemModel[] auditLogItemModels) {
        this.auditLogItemModels = auditLogItemModels;
        return this;
    }
    public String contentType;
    public GetOrganizationAuditlogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationAuditlogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}