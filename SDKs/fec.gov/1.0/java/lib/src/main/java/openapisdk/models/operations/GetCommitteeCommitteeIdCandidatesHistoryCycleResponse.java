package openapisdk.models.operations;



public class GetCommitteeCommitteeIdCandidatesHistoryCycleResponse {
    public openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage;
    public GetCommitteeCommitteeIdCandidatesHistoryCycleResponse withCandidateHistoryPage(openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage) {
        this.candidateHistoryPage = candidateHistoryPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdCandidatesHistoryCycleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdCandidatesHistoryCycleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}