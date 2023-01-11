package openapisdk.models.operations;



public class OrderTypesAllRequest {
    public OrderTypesAllQueryParams queryParams;
    public OrderTypesAllRequest withQueryParams(OrderTypesAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrderTypesAllHeaders headers;
    public OrderTypesAllRequest withHeaders(OrderTypesAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OrderTypesAllSecurity security;
    public OrderTypesAllRequest withSecurity(OrderTypesAllSecurity security) {
        this.security = security;
        return this;
    }
}