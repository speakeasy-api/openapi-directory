package openapisdk.models.operations;



public class TaskStatusesPartialUpdateRequest {
    public TaskStatusesPartialUpdatePathParams pathParams;
    public TaskStatusesPartialUpdateRequest withPathParams(TaskStatusesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskStatusesPartialUpdateQueryParams queryParams;
    public TaskStatusesPartialUpdateRequest withQueryParams(TaskStatusesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskStatusesPartialUpdateSecurity security;
    public TaskStatusesPartialUpdateRequest withSecurity(TaskStatusesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}