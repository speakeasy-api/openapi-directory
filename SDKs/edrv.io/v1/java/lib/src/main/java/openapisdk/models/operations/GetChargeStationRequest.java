package openapisdk.models.operations;



public class GetChargeStationRequest {
    public GetChargeStationPathParams pathParams;
    public GetChargeStationRequest withPathParams(GetChargeStationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChargeStationQueryParams queryParams;
    public GetChargeStationRequest withQueryParams(GetChargeStationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}