package openapisdk.models.operations;



public class GetElectioneeringAggregatesResponse {
    public String contentType;
    public GetElectioneeringAggregatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ElectioneeringByCandidatePage electioneeringByCandidatePage;
    public GetElectioneeringAggregatesResponse withElectioneeringByCandidatePage(openapisdk.models.shared.ElectioneeringByCandidatePage electioneeringByCandidatePage) {
        this.electioneeringByCandidatePage = electioneeringByCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetElectioneeringAggregatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}