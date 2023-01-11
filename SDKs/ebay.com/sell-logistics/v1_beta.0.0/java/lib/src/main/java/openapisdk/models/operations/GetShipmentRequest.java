package openapisdk.models.operations;



public class GetShipmentRequest {
    public GetShipmentPathParams pathParams;
    public GetShipmentRequest withPathParams(GetShipmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetShipmentSecurity security;
    public GetShipmentRequest withSecurity(GetShipmentSecurity security) {
        this.security = security;
        return this;
    }
}