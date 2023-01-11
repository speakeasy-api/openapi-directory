package openapisdk.models.operations;



public class ProjectsListForRepoRequest {
    public ProjectsListForRepoPathParams pathParams;
    public ProjectsListForRepoRequest withPathParams(ProjectsListForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProjectsListForRepoQueryParams queryParams;
    public ProjectsListForRepoRequest withQueryParams(ProjectsListForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}