package openapisdk.models.operations;



public class ProjectsListForUserRequest {
    public ProjectsListForUserPathParams pathParams;
    public ProjectsListForUserRequest withPathParams(ProjectsListForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProjectsListForUserQueryParams queryParams;
    public ProjectsListForUserRequest withQueryParams(ProjectsListForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}