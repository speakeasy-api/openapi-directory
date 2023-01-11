package openapisdk.models.operations;



public class TaskCategoriesListRequest {
    public TaskCategoriesListQueryParams queryParams;
    public TaskCategoriesListRequest withQueryParams(TaskCategoriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskCategoriesListSecurity security;
    public TaskCategoriesListRequest withSecurity(TaskCategoriesListSecurity security) {
        this.security = security;
        return this;
    }
}