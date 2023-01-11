package openapisdk.models.operations;



public class CancelShipmentRequest {
    public CancelShipmentPathParams pathParams;
    public CancelShipmentRequest withPathParams(CancelShipmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelShipmentSecurity security;
    public CancelShipmentRequest withSecurity(CancelShipmentSecurity security) {
        this.security = security;
        return this;
    }
}