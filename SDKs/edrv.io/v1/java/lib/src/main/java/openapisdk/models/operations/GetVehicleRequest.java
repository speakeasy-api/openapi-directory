package openapisdk.models.operations;



public class GetVehicleRequest {
    public GetVehiclePathParams pathParams;
    public GetVehicleRequest withPathParams(GetVehiclePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVehicleQueryParams queryParams;
    public GetVehicleRequest withQueryParams(GetVehicleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}