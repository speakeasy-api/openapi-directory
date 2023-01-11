package openapisdk.models.operations;



public class GetCandidateCandidateIdResponse {
    public openapisdk.models.shared.CandidateDetailPage candidateDetailPage;
    public GetCandidateCandidateIdResponse withCandidateDetailPage(openapisdk.models.shared.CandidateDetailPage candidateDetailPage) {
        this.candidateDetailPage = candidateDetailPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}