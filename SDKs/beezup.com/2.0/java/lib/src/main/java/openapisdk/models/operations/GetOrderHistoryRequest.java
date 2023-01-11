package openapisdk.models.operations;



public class GetOrderHistoryRequest {
    public GetOrderHistoryPathParams pathParams;
    public GetOrderHistoryRequest withPathParams(GetOrderHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrderHistoryHeaders headers;
    public GetOrderHistoryRequest withHeaders(GetOrderHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}