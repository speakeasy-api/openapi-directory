package openapisdk.models.operations;



public class GetCommitteeCommitteeIdTotalsResponse {
    public openapisdk.models.shared.CommitteeTotalsPage committeeTotalsPage;
    public GetCommitteeCommitteeIdTotalsResponse withCommitteeTotalsPage(openapisdk.models.shared.CommitteeTotalsPage committeeTotalsPage) {
        this.committeeTotalsPage = committeeTotalsPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}