package openapisdk.models.operations;



public class GetCommunicationCostsAggregatesResponse {
    public openapisdk.models.shared.CommunicationCostByCandidatePage communicationCostByCandidatePage;
    public GetCommunicationCostsAggregatesResponse withCommunicationCostByCandidatePage(openapisdk.models.shared.CommunicationCostByCandidatePage communicationCostByCandidatePage) {
        this.communicationCostByCandidatePage = communicationCostByCandidatePage;
        return this;
    }
    public String contentType;
    public GetCommunicationCostsAggregatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommunicationCostsAggregatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}