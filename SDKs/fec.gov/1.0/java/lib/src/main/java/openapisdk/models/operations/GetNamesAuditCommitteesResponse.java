package openapisdk.models.operations;



public class GetNamesAuditCommitteesResponse {
    public openapisdk.models.shared.AuditCommitteeSearchList auditCommitteeSearchList;
    public GetNamesAuditCommitteesResponse withAuditCommitteeSearchList(openapisdk.models.shared.AuditCommitteeSearchList auditCommitteeSearchList) {
        this.auditCommitteeSearchList = auditCommitteeSearchList;
        return this;
    }
    public String contentType;
    public GetNamesAuditCommitteesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNamesAuditCommitteesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}