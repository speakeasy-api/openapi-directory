package openapisdk.models.operations;



public class GetOrderTaskRequest {
    public GetOrderTaskPathParams pathParams;
    public GetOrderTaskRequest withPathParams(GetOrderTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrderTaskSecurity security;
    public GetOrderTaskRequest withSecurity(GetOrderTaskSecurity security) {
        this.security = security;
        return this;
    }
}