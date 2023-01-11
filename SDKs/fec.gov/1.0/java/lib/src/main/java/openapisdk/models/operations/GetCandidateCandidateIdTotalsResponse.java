package openapisdk.models.operations;



public class GetCandidateCandidateIdTotalsResponse {
    public openapisdk.models.shared.CommitteeTotalsPage committeeTotalsPage;
    public GetCandidateCandidateIdTotalsResponse withCommitteeTotalsPage(openapisdk.models.shared.CommitteeTotalsPage committeeTotalsPage) {
        this.committeeTotalsPage = committeeTotalsPage;
        return this;
    }
    public String contentType;
    public GetCandidateCandidateIdTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidateCandidateIdTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}