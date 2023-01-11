package openapisdk.models.operations;



public class GetLensVersionDifferenceRequest {
    public GetLensVersionDifferencePathParams pathParams;
    public GetLensVersionDifferenceRequest withPathParams(GetLensVersionDifferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLensVersionDifferenceQueryParams queryParams;
    public GetLensVersionDifferenceRequest withQueryParams(GetLensVersionDifferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLensVersionDifferenceHeaders headers;
    public GetLensVersionDifferenceRequest withHeaders(GetLensVersionDifferenceHeaders headers) {
        this.headers = headers;
        return this;
    }
}