package openapisdk.models.operations;



public class GetCandidateCandidateIdHistoryResponse {
    public openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage;
    public GetCandidateCandidateIdHistoryResponse withCandidateHistoryPage(openapisdk.models.shared.CandidateHistoryPage candidateHistoryPage) {
        this.candidateHistoryPage = candidateHistoryPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}