package openapisdk.models.operations;



public class GetElectioneeringTotalsByCandidateResponse {
    public String contentType;
    public GetElectioneeringTotalsByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EcTotalsByCandidatePage ecTotalsByCandidatePage;
    public GetElectioneeringTotalsByCandidateResponse withEcTotalsByCandidatePage(openapisdk.models.shared.EcTotalsByCandidatePage ecTotalsByCandidatePage) {
        this.ecTotalsByCandidatePage = ecTotalsByCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetElectioneeringTotalsByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}