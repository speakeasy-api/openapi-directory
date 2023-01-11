package openapisdk.models.operations;



public class GetFastestDeparturesByCrsRequest {
    public GetFastestDeparturesByCrsPathParams pathParams;
    public GetFastestDeparturesByCrsRequest withPathParams(GetFastestDeparturesByCrsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFastestDeparturesByCrsQueryParams queryParams;
    public GetFastestDeparturesByCrsRequest withQueryParams(GetFastestDeparturesByCrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}