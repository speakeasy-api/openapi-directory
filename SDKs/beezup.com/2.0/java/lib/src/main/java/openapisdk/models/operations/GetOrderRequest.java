package openapisdk.models.operations;



public class GetOrderRequest {
    public GetOrderPathParams pathParams;
    public GetOrderRequest withPathParams(GetOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrderHeaders headers;
    public GetOrderRequest withHeaders(GetOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
}