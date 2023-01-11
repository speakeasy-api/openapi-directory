package openapisdk.models.operations;



public class GetArrivalsAndDeparturesByCrsRequest {
    public GetArrivalsAndDeparturesByCrsPathParams pathParams;
    public GetArrivalsAndDeparturesByCrsRequest withPathParams(GetArrivalsAndDeparturesByCrsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetArrivalsAndDeparturesByCrsQueryParams queryParams;
    public GetArrivalsAndDeparturesByCrsRequest withQueryParams(GetArrivalsAndDeparturesByCrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}