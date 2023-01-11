package openapisdk.models.operations;



public class TasksUpdateRequest {
    public TasksUpdatePathParams pathParams;
    public TasksUpdateRequest withPathParams(TasksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksUpdateQueryParams queryParams;
    public TasksUpdateRequest withQueryParams(TasksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksUpdateSecurity security;
    public TasksUpdateRequest withSecurity(TasksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}