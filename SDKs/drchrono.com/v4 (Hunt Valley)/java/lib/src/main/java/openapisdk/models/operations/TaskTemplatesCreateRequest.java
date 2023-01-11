package openapisdk.models.operations;



public class TaskTemplatesCreateRequest {
    public TaskTemplatesCreateQueryParams queryParams;
    public TaskTemplatesCreateRequest withQueryParams(TaskTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskTemplatesCreateSecurity security;
    public TaskTemplatesCreateRequest withSecurity(TaskTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}