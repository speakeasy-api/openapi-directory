package openapisdk.models.operations;



public class GetOrdersRequest {
    public GetOrdersQueryParams queryParams;
    public GetOrdersRequest withQueryParams(GetOrdersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrdersSecurity security;
    public GetOrdersRequest withSecurity(GetOrdersSecurity security) {
        this.security = security;
        return this;
    }
}