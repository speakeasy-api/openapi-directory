package openapisdk.models.operations;



public class GetCommunicationCostsByCandidateResponse {
    public openapisdk.models.shared.CommunicationCostByCandidatePage communicationCostByCandidatePage;
    public GetCommunicationCostsByCandidateResponse withCommunicationCostByCandidatePage(openapisdk.models.shared.CommunicationCostByCandidatePage communicationCostByCandidatePage) {
        this.communicationCostByCandidatePage = communicationCostByCandidatePage;
        return this;
    }
    public String contentType;
    public GetCommunicationCostsByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommunicationCostsByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}