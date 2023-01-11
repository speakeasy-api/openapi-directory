package openapisdk.models.operations;



public class GetNextDeparturesByCrsRequest {
    public GetNextDeparturesByCrsPathParams pathParams;
    public GetNextDeparturesByCrsRequest withPathParams(GetNextDeparturesByCrsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNextDeparturesByCrsQueryParams queryParams;
    public GetNextDeparturesByCrsRequest withQueryParams(GetNextDeparturesByCrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}