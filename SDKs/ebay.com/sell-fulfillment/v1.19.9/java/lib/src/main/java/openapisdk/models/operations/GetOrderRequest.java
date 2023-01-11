package openapisdk.models.operations;



public class GetOrderRequest {
    public GetOrderPathParams pathParams;
    public GetOrderRequest withPathParams(GetOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrderQueryParams queryParams;
    public GetOrderRequest withQueryParams(GetOrderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrderSecurity security;
    public GetOrderRequest withSecurity(GetOrderSecurity security) {
        this.security = security;
        return this;
    }
}