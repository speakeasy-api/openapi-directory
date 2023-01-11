package openapisdk.models.operations;



public class CustomersDeleteRequest {
    public CustomersDeletePathParams pathParams;
    public CustomersDeleteRequest withPathParams(CustomersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomersDeleteQueryParams queryParams;
    public CustomersDeleteRequest withQueryParams(CustomersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomersDeleteHeaders headers;
    public CustomersDeleteRequest withHeaders(CustomersDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CustomersDeleteSecurity security;
    public CustomersDeleteRequest withSecurity(CustomersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}