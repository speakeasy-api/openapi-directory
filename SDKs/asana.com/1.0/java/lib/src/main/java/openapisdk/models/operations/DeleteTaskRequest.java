package openapisdk.models.operations;



public class DeleteTaskRequest {
    public DeleteTaskPathParams pathParams;
    public DeleteTaskRequest withPathParams(DeleteTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTaskQueryParams queryParams;
    public DeleteTaskRequest withQueryParams(DeleteTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}