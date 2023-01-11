package openapisdk.models.operations;



public class GetInventoryTaskRequest {
    public GetInventoryTaskPathParams pathParams;
    public GetInventoryTaskRequest withPathParams(GetInventoryTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInventoryTaskSecurity security;
    public GetInventoryTaskRequest withSecurity(GetInventoryTaskSecurity security) {
        this.security = security;
        return this;
    }
}