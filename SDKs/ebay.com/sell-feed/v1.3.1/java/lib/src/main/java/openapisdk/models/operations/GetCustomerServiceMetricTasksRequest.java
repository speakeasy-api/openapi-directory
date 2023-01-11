package openapisdk.models.operations;



public class GetCustomerServiceMetricTasksRequest {
    public GetCustomerServiceMetricTasksQueryParams queryParams;
    public GetCustomerServiceMetricTasksRequest withQueryParams(GetCustomerServiceMetricTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCustomerServiceMetricTasksSecurity security;
    public GetCustomerServiceMetricTasksRequest withSecurity(GetCustomerServiceMetricTasksSecurity security) {
        this.security = security;
        return this;
    }
}