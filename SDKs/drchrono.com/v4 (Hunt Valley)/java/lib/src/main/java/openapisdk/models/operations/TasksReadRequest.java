package openapisdk.models.operations;



public class TasksReadRequest {
    public TasksReadPathParams pathParams;
    public TasksReadRequest withPathParams(TasksReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksReadQueryParams queryParams;
    public TasksReadRequest withQueryParams(TasksReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksReadSecurity security;
    public TasksReadRequest withSecurity(TasksReadSecurity security) {
        this.security = security;
        return this;
    }
}