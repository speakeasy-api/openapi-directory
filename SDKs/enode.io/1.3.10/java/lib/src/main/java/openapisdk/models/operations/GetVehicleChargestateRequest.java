package openapisdk.models.operations;



public class GetVehicleChargestateRequest {
    public GetVehicleChargestatePathParams pathParams;
    public GetVehicleChargestateRequest withPathParams(GetVehicleChargestatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVehicleChargestateSecurity security;
    public GetVehicleChargestateRequest withSecurity(GetVehicleChargestateSecurity security) {
        this.security = security;
        return this;
    }
}