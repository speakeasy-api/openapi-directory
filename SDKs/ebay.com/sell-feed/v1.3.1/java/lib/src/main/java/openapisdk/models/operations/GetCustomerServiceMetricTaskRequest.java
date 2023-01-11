package openapisdk.models.operations;



public class GetCustomerServiceMetricTaskRequest {
    public GetCustomerServiceMetricTaskPathParams pathParams;
    public GetCustomerServiceMetricTaskRequest withPathParams(GetCustomerServiceMetricTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCustomerServiceMetricTaskSecurity security;
    public GetCustomerServiceMetricTaskRequest withSecurity(GetCustomerServiceMetricTaskSecurity security) {
        this.security = security;
        return this;
    }
}