package openapisdk.models.operations;



public class AuditLogGetAuditLogRequest {
    public AuditLogGetAuditLogPathParams pathParams;
    public AuditLogGetAuditLogRequest withPathParams(AuditLogGetAuditLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuditLogGetAuditLogQueryParams queryParams;
    public AuditLogGetAuditLogRequest withQueryParams(AuditLogGetAuditLogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}