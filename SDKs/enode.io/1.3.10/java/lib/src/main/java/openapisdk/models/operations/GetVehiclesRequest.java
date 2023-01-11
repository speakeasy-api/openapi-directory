package openapisdk.models.operations;



public class GetVehiclesRequest {
    public GetVehiclesQueryParams queryParams;
    public GetVehiclesRequest withQueryParams(GetVehiclesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVehiclesSecurity security;
    public GetVehiclesRequest withSecurity(GetVehiclesSecurity security) {
        this.security = security;
        return this;
    }
}