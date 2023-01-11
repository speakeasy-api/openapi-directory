package openapisdk.models.operations;



public class GetUserProjectsRequest {
    public GetUserProjectsPathParams pathParams;
    public GetUserProjectsRequest withPathParams(GetUserProjectsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserProjectsQueryParams queryParams;
    public GetUserProjectsRequest withQueryParams(GetUserProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}