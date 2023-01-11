package openapisdk.models.operations;



public class TaskTemplatesUpdateRequest {
    public TaskTemplatesUpdatePathParams pathParams;
    public TaskTemplatesUpdateRequest withPathParams(TaskTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskTemplatesUpdateQueryParams queryParams;
    public TaskTemplatesUpdateRequest withQueryParams(TaskTemplatesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskTemplatesUpdateSecurity security;
    public TaskTemplatesUpdateRequest withSecurity(TaskTemplatesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}