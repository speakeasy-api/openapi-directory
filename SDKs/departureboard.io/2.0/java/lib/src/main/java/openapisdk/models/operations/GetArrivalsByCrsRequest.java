package openapisdk.models.operations;



public class GetArrivalsByCrsRequest {
    public GetArrivalsByCrsPathParams pathParams;
    public GetArrivalsByCrsRequest withPathParams(GetArrivalsByCrsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetArrivalsByCrsQueryParams queryParams;
    public GetArrivalsByCrsRequest withQueryParams(GetArrivalsByCrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}