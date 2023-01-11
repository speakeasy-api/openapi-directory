package openapisdk.models.operations;



public class GetCommitteeCommitteeIdReportsResponse {
    public openapisdk.models.shared.CommitteeReportsPage committeeReportsPage;
    public GetCommitteeCommitteeIdReportsResponse withCommitteeReportsPage(openapisdk.models.shared.CommitteeReportsPage committeeReportsPage) {
        this.committeeReportsPage = committeeReportsPage;
        return this;
    }
    public String contentType;
    public GetCommitteeCommitteeIdReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteeCommitteeIdReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}