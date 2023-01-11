package openapisdk.models.operations;



public class GetCommitteeCommitteeIdCandidatesHistoryResponse {
    public openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage;
    public GetCommitteeCommitteeIdCandidatesHistoryResponse withCandidateHistoryPage(openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage) {
        this.candidateHistoryPage = candidateHistoryPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdCandidatesHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdCandidatesHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}