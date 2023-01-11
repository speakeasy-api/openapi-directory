package openapisdk.models.operations;



public class TasksPartialUpdateRequest {
    public TasksPartialUpdatePathParams pathParams;
    public TasksPartialUpdateRequest withPathParams(TasksPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksPartialUpdateQueryParams queryParams;
    public TasksPartialUpdateRequest withQueryParams(TasksPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksPartialUpdateSecurity security;
    public TasksPartialUpdateRequest withSecurity(TasksPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}