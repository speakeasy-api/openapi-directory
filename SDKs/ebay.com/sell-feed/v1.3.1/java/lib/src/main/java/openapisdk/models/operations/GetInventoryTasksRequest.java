package openapisdk.models.operations;



public class GetInventoryTasksRequest {
    public GetInventoryTasksQueryParams queryParams;
    public GetInventoryTasksRequest withQueryParams(GetInventoryTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInventoryTasksSecurity security;
    public GetInventoryTasksRequest withSecurity(GetInventoryTasksSecurity security) {
        this.security = security;
        return this;
    }
}