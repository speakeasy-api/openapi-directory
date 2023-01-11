package openapisdk.models.operations;



public class GetCandidateCandidateIdCommitteesResponse {
    public openapisdk.models.shared.CommitteeDetailPage committeeDetailPage;
    public GetCandidateCandidateIdCommitteesResponse withCommitteeDetailPage(openapisdk.models.shared.CommitteeDetailPage committeeDetailPage) {
        this.committeeDetailPage = committeeDetailPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdCommitteesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdCommitteesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}