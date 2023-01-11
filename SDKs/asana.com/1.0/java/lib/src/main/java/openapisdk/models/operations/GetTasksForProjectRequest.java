package openapisdk.models.operations;



public class GetTasksForProjectRequest {
    public GetTasksForProjectPathParams pathParams;
    public GetTasksForProjectRequest withPathParams(GetTasksForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTasksForProjectQueryParams queryParams;
    public GetTasksForProjectRequest withQueryParams(GetTasksForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}