package openapisdk.models.operations;



public class TaskCategoriesCreateRequest {
    public TaskCategoriesCreateQueryParams queryParams;
    public TaskCategoriesCreateRequest withQueryParams(TaskCategoriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskCategoriesCreateSecurity security;
    public TaskCategoriesCreateRequest withSecurity(TaskCategoriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}