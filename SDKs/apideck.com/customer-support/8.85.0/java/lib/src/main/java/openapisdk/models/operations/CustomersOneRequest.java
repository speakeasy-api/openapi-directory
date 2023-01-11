package openapisdk.models.operations;



public class CustomersOneRequest {
    public CustomersOnePathParams pathParams;
    public CustomersOneRequest withPathParams(CustomersOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomersOneQueryParams queryParams;
    public CustomersOneRequest withQueryParams(CustomersOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomersOneHeaders headers;
    public CustomersOneRequest withHeaders(CustomersOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CustomersOneSecurity security;
    public CustomersOneRequest withSecurity(CustomersOneSecurity security) {
        this.security = security;
        return this;
    }
}