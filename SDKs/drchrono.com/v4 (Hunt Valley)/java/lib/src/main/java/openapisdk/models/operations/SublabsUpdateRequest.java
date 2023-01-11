package openapisdk.models.operations;



public class SublabsUpdateRequest {
    public SublabsUpdatePathParams pathParams;
    public SublabsUpdateRequest withPathParams(SublabsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SublabsUpdateSecurity security;
    public SublabsUpdateRequest withSecurity(SublabsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}