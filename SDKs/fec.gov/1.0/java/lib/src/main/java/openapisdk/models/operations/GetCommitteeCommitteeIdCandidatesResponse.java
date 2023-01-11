package openapisdk.models.operations;



public class GetCommitteeCommitteeIdCandidatesResponse {
    public openapisdk.models.shared.CandidateDetailPage candidateDetailPage;
    public GetCommitteeCommitteeIdCandidatesResponse withCandidateDetailPage(openapisdk.models.shared.CandidateDetailPage candidateDetailPage) {
        this.candidateDetailPage = candidateDetailPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}