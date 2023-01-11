package openapisdk.models.operations;



public class GetTotalsEntityTypeResponse {
    public openapisdk.models.shared.CommitteeTotalsPage committeeTotalsPage;
    public GetTotalsEntityTypeResponse withCommitteeTotalsPage(openapisdk.models.shared.CommitteeTotalsPage committeeTotalsPage) {
        this.committeeTotalsPage = committeeTotalsPage;
        return this;
    }
    public String contentType;
    public GetTotalsEntityTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTotalsEntityTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}