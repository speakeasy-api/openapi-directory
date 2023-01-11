package openapisdk.models.operations;



public class DeleteProjectRequest {
    public DeleteProjectPathParams pathParams;
    public DeleteProjectRequest withPathParams(DeleteProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProjectQueryParams queryParams;
    public DeleteProjectRequest withQueryParams(DeleteProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}