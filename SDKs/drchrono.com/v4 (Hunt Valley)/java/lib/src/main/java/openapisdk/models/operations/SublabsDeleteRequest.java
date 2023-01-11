package openapisdk.models.operations;



public class SublabsDeleteRequest {
    public SublabsDeletePathParams pathParams;
    public SublabsDeleteRequest withPathParams(SublabsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SublabsDeleteSecurity security;
    public SublabsDeleteRequest withSecurity(SublabsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}