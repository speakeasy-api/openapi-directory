package openapisdk.models.operations;



public class TaskStatusesUpdateRequest {
    public TaskStatusesUpdatePathParams pathParams;
    public TaskStatusesUpdateRequest withPathParams(TaskStatusesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskStatusesUpdateQueryParams queryParams;
    public TaskStatusesUpdateRequest withQueryParams(TaskStatusesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskStatusesUpdateSecurity security;
    public TaskStatusesUpdateRequest withSecurity(TaskStatusesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}