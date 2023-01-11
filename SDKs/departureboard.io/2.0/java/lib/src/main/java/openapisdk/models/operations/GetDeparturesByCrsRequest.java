package openapisdk.models.operations;



public class GetDeparturesByCrsRequest {
    public GetDeparturesByCrsPathParams pathParams;
    public GetDeparturesByCrsRequest withPathParams(GetDeparturesByCrsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeparturesByCrsQueryParams queryParams;
    public GetDeparturesByCrsRequest withQueryParams(GetDeparturesByCrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}