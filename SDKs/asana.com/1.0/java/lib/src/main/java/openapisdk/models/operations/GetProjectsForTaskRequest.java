package openapisdk.models.operations;



public class GetProjectsForTaskRequest {
    public GetProjectsForTaskPathParams pathParams;
    public GetProjectsForTaskRequest withPathParams(GetProjectsForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectsForTaskQueryParams queryParams;
    public GetProjectsForTaskRequest withQueryParams(GetProjectsForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}