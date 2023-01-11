package openapisdk.models.operations;



public class GetTaskRequest {
    public GetTaskPathParams pathParams;
    public GetTaskRequest withPathParams(GetTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaskQueryParams queryParams;
    public GetTaskRequest withQueryParams(GetTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}