package openapisdk.models.operations;



public class TaskCategoriesPartialUpdateRequest {
    public TaskCategoriesPartialUpdatePathParams pathParams;
    public TaskCategoriesPartialUpdateRequest withPathParams(TaskCategoriesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskCategoriesPartialUpdateQueryParams queryParams;
    public TaskCategoriesPartialUpdateRequest withQueryParams(TaskCategoriesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskCategoriesPartialUpdateSecurity security;
    public TaskCategoriesPartialUpdateRequest withSecurity(TaskCategoriesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}