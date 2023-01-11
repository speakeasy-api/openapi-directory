package openapisdk.models.operations;



public class GetElectionsSummaryResponse {
    public String contentType;
    public GetElectionsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ElectionSummary electionSummary;
    public GetElectionsSummaryResponse withElectionSummary(openapisdk.models.shared.ElectionSummary electionSummary) {
        this.electionSummary = electionSummary;
        return this;
    }
    public Long statusCode;
    public GetElectionsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}