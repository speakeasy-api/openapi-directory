package openapisdk.models.operations;



public class TaskTemplatesListRequest {
    public TaskTemplatesListQueryParams queryParams;
    public TaskTemplatesListRequest withQueryParams(TaskTemplatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskTemplatesListSecurity security;
    public TaskTemplatesListRequest withSecurity(TaskTemplatesListSecurity security) {
        this.security = security;
        return this;
    }
}