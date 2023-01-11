package openapisdk.models.operations;



public class TaskTemplatesReadRequest {
    public TaskTemplatesReadPathParams pathParams;
    public TaskTemplatesReadRequest withPathParams(TaskTemplatesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskTemplatesReadQueryParams queryParams;
    public TaskTemplatesReadRequest withQueryParams(TaskTemplatesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskTemplatesReadSecurity security;
    public TaskTemplatesReadRequest withSecurity(TaskTemplatesReadSecurity security) {
        this.security = security;
        return this;
    }
}