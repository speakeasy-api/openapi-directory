package openapisdk.models.operations;



public class TaskStatusesReadRequest {
    public TaskStatusesReadPathParams pathParams;
    public TaskStatusesReadRequest withPathParams(TaskStatusesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskStatusesReadQueryParams queryParams;
    public TaskStatusesReadRequest withQueryParams(TaskStatusesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskStatusesReadSecurity security;
    public TaskStatusesReadRequest withSecurity(TaskStatusesReadSecurity security) {
        this.security = security;
        return this;
    }
}