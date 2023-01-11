package openapisdk.models.operations;



public class GetTasksForUserTaskListRequest {
    public GetTasksForUserTaskListPathParams pathParams;
    public GetTasksForUserTaskListRequest withPathParams(GetTasksForUserTaskListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTasksForUserTaskListQueryParams queryParams;
    public GetTasksForUserTaskListRequest withQueryParams(GetTasksForUserTaskListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}