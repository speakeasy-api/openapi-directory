package openapisdk.models.operations;



public class GetNamesAuditCandidatesResponse {
    public openapisdk.models.shared.AuditCandidateSearchList auditCandidateSearchList;
    public GetNamesAuditCandidatesResponse withAuditCandidateSearchList(openapisdk.models.shared.AuditCandidateSearchList auditCandidateSearchList) {
        this.auditCandidateSearchList = auditCandidateSearchList;
        return this;
    }
    public String contentType;
    public GetNamesAuditCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNamesAuditCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}