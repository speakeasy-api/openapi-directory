package openapisdk.models.operations;



public class AuditLogGetAuditLogResponse {
    public String contentType;
    public AuditLogGetAuditLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuditLogGetAuditLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuditLogEvent[] auditLogEvents;
    public AuditLogGetAuditLogResponse withAuditLogEvents(openapisdk.models.shared.AuditLogEvent[] auditLogEvents) {
        this.auditLogEvents = auditLogEvents;
        return this;
    }
}