package openapisdk.models.operations;



public class TaskStatusesListRequest {
    public TaskStatusesListQueryParams queryParams;
    public TaskStatusesListRequest withQueryParams(TaskStatusesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskStatusesListSecurity security;
    public TaskStatusesListRequest withSecurity(TaskStatusesListSecurity security) {
        this.security = security;
        return this;
    }
}