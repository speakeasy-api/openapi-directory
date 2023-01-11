package openapisdk.models.operations;



public class SearchTasksForWorkspaceRequest {
    public SearchTasksForWorkspacePathParams pathParams;
    public SearchTasksForWorkspaceRequest withPathParams(SearchTasksForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchTasksForWorkspaceQueryParams queryParams;
    public SearchTasksForWorkspaceRequest withQueryParams(SearchTasksForWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}