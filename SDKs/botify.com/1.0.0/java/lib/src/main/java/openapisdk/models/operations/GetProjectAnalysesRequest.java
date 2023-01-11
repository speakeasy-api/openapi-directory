package openapisdk.models.operations;



public class GetProjectAnalysesRequest {
    public GetProjectAnalysesPathParams pathParams;
    public GetProjectAnalysesRequest withPathParams(GetProjectAnalysesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectAnalysesQueryParams queryParams;
    public GetProjectAnalysesRequest withQueryParams(GetProjectAnalysesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}