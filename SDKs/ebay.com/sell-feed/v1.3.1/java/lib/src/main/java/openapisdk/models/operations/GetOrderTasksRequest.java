package openapisdk.models.operations;



public class GetOrderTasksRequest {
    public GetOrderTasksQueryParams queryParams;
    public GetOrderTasksRequest withQueryParams(GetOrderTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrderTasksSecurity security;
    public GetOrderTasksRequest withSecurity(GetOrderTasksSecurity security) {
        this.security = security;
        return this;
    }
}