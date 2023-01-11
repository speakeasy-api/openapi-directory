package openapisdk.models.operations;



public class GetPageRankLostResponse {
    public String contentType;
    public GetPageRankLostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetPageRankLostResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public openapisdk.models.shared.PageRankLost pageRankLost;
    public GetPageRankLostResponse withPageRankLost(openapisdk.models.shared.PageRankLost pageRankLost) {
        this.pageRankLost = pageRankLost;
        return this;
    }
    public Long statusCode;
    public GetPageRankLostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}