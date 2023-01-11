package openapisdk.models.operations;



public class GetCandidateCandidateIdCommitteesHistoryResponse {
    public openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage;
    public GetCandidateCandidateIdCommitteesHistoryResponse withCommitteeHistoryPage(openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage) {
        this.committeeHistoryPage = committeeHistoryPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdCommitteesHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdCommitteesHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}