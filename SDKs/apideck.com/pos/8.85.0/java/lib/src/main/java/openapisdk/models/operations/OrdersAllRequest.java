package openapisdk.models.operations;



public class OrdersAllRequest {
    public OrdersAllQueryParams queryParams;
    public OrdersAllRequest withQueryParams(OrdersAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrdersAllHeaders headers;
    public OrdersAllRequest withHeaders(OrdersAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OrdersAllSecurity security;
    public OrdersAllRequest withSecurity(OrdersAllSecurity security) {
        this.security = security;
        return this;
    }
}