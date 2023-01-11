package openapisdk.models.operations;



public class GetReportsEntityTypeResponse {
    public openapisdk.models.shared.CommitteeReportsPage committeeReportsPage;
    public GetReportsEntityTypeResponse withCommitteeReportsPage(openapisdk.models.shared.CommitteeReportsPage committeeReportsPage) {
        this.committeeReportsPage = committeeReportsPage;
        return this;
    }
    public String contentType;
    public GetReportsEntityTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReportsEntityTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}