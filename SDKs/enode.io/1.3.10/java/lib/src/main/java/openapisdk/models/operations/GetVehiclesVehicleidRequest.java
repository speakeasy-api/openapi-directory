package openapisdk.models.operations;



public class GetVehiclesVehicleidRequest {
    public GetVehiclesVehicleidPathParams pathParams;
    public GetVehiclesVehicleidRequest withPathParams(GetVehiclesVehicleidPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVehiclesVehicleidQueryParams queryParams;
    public GetVehiclesVehicleidRequest withQueryParams(GetVehiclesVehicleidQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVehiclesVehicleidSecurity security;
    public GetVehiclesVehicleidRequest withSecurity(GetVehiclesVehicleidSecurity security) {
        this.security = security;
        return this;
    }
}