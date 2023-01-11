package openapisdk.models.operations;



public class GetCommunicationCostsTotalsByCandidateResponse {
    public openapisdk.models.shared.CcTotalsByCandidatePage ccTotalsByCandidatePage;
    public GetCommunicationCostsTotalsByCandidateResponse withCcTotalsByCandidatePage(openapisdk.models.shared.CcTotalsByCandidatePage ccTotalsByCandidatePage) {
        this.ccTotalsByCandidatePage = ccTotalsByCandidatePage;
        return this;
    }
    public String contentType;
    public GetCommunicationCostsTotalsByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommunicationCostsTotalsByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}