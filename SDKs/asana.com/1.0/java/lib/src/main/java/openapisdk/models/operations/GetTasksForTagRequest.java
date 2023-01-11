package openapisdk.models.operations;



public class GetTasksForTagRequest {
    public GetTasksForTagPathParams pathParams;
    public GetTasksForTagRequest withPathParams(GetTasksForTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTasksForTagQueryParams queryParams;
    public GetTasksForTagRequest withQueryParams(GetTasksForTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}