package openapisdk.models.operations;



public class TaskCategoriesReadRequest {
    public TaskCategoriesReadPathParams pathParams;
    public TaskCategoriesReadRequest withPathParams(TaskCategoriesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskCategoriesReadQueryParams queryParams;
    public TaskCategoriesReadRequest withQueryParams(TaskCategoriesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskCategoriesReadSecurity security;
    public TaskCategoriesReadRequest withSecurity(TaskCategoriesReadSecurity security) {
        this.security = security;
        return this;
    }
}