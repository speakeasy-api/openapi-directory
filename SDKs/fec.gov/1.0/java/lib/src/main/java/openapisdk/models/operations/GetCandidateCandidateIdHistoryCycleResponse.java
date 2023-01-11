package openapisdk.models.operations;



public class GetCandidateCandidateIdHistoryCycleResponse {
    public openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage;
    public GetCandidateCandidateIdHistoryCycleResponse withCandidateHistoryPage(openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage) {
        this.candidateHistoryPage = candidateHistoryPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdHistoryCycleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdHistoryCycleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}