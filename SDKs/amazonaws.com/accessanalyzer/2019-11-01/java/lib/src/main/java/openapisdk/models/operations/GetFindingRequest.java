package openapisdk.models.operations;



public class GetFindingRequest {
    public GetFindingPathParams pathParams;
    public GetFindingRequest withPathParams(GetFindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFindingQueryParams queryParams;
    public GetFindingRequest withQueryParams(GetFindingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFindingHeaders headers;
    public GetFindingRequest withHeaders(GetFindingHeaders headers) {
        this.headers = headers;
        return this;
    }
}