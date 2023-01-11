package openapisdk.models.operations;



public class GetAuditlogsResponse {
    public openapisdk.models.shared.AuditLogItemModel[] auditLogItemModels;
    public GetAuditlogsResponse withAuditLogItemModels(openapisdk.models.shared.AuditLogItemModel[] auditLogItemModels) {
        this.auditLogItemModels = auditLogItemModels;
        return this;
    }
    public String contentType;
    public GetAuditlogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuditlogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}