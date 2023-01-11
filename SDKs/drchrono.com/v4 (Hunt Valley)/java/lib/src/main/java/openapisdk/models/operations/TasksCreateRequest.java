package openapisdk.models.operations;



public class TasksCreateRequest {
    public TasksCreateQueryParams queryParams;
    public TasksCreateRequest withQueryParams(TasksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksCreateSecurity security;
    public TasksCreateRequest withSecurity(TasksCreateSecurity security) {
        this.security = security;
        return this;
    }
}