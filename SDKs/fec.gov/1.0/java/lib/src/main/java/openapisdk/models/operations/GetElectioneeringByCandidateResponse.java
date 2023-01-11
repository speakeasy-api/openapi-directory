package openapisdk.models.operations;



public class GetElectioneeringByCandidateResponse {
    public String contentType;
    public GetElectioneeringByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ElectioneeringByCandidatePage electioneeringByCandidatePage;
    public GetElectioneeringByCandidateResponse withElectioneeringByCandidatePage(openapisdk.models.shared.ElectioneeringByCandidatePage electioneeringByCandidatePage) {
        this.electioneeringByCandidatePage = electioneeringByCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetElectioneeringByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}