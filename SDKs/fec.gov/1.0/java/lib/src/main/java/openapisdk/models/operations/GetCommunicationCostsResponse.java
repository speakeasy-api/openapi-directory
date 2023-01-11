package openapisdk.models.operations;



public class GetCommunicationCostsResponse {
    public openapisdk.models.shared.CommunicationCostPage communicationCostPage;
    public GetCommunicationCostsResponse withCommunicationCostPage(openapisdk.models.shared.CommunicationCostPage communicationCostPage) {
        this.communicationCostPage = communicationCostPage;
        return this;
    }
    public String contentType;
    public GetCommunicationCostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommunicationCostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}