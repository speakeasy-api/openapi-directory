package openapisdk.models.operations;



public class DisconnectVendorRequest {
    public DisconnectVendorPathParams pathParams;
    public DisconnectVendorRequest withPathParams(DisconnectVendorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisconnectVendorSecurity security;
    public DisconnectVendorRequest withSecurity(DisconnectVendorSecurity security) {
        this.security = security;
        return this;
    }
}