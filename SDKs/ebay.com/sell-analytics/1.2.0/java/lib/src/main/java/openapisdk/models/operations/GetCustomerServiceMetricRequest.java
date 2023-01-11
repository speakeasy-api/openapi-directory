package openapisdk.models.operations;



public class GetCustomerServiceMetricRequest {
    public GetCustomerServiceMetricPathParams pathParams;
    public GetCustomerServiceMetricRequest withPathParams(GetCustomerServiceMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCustomerServiceMetricQueryParams queryParams;
    public GetCustomerServiceMetricRequest withQueryParams(GetCustomerServiceMetricQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCustomerServiceMetricSecurity security;
    public GetCustomerServiceMetricRequest withSecurity(GetCustomerServiceMetricSecurity security) {
        this.security = security;
        return this;
    }
}