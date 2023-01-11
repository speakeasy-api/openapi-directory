package openapisdk.models.operations;



public class GetElectioneeringResponse {
    public String contentType;
    public GetElectioneeringResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ElectioneeringPage electioneeringPage;
    public GetElectioneeringResponse withElectioneeringPage(openapisdk.models.shared.ElectioneeringPage electioneeringPage) {
        this.electioneeringPage = electioneeringPage;
        return this;
    }
    public Long statusCode;
    public GetElectioneeringResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}