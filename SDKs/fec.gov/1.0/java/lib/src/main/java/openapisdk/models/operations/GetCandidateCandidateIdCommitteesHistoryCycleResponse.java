package openapisdk.models.operations;



public class GetCandidateCandidateIdCommitteesHistoryCycleResponse {
    public openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage;
    public GetCandidateCandidateIdCommitteesHistoryCycleResponse withCommitteeHistoryPage(openapisdk.models.shared.CommitteeHistoryPage committeeHistoryPage) {
        this.committeeHistoryPage = committeeHistoryPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdCommitteesHistoryCycleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdCommitteesHistoryCycleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}