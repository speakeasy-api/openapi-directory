package openapisdk.models.operations;



public class TasksListRequest {
    public TasksListQueryParams queryParams;
    public TasksListRequest withQueryParams(TasksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksListSecurity security;
    public TasksListRequest withSecurity(TasksListSecurity security) {
        this.security = security;
        return this;
    }
}