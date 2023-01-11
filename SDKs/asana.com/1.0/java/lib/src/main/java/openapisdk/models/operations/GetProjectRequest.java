package openapisdk.models.operations;



public class GetProjectRequest {
    public GetProjectPathParams pathParams;
    public GetProjectRequest withPathParams(GetProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectQueryParams queryParams;
    public GetProjectRequest withQueryParams(GetProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}