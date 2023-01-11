package openapisdk.models.operations;



public class SublabsReadRequest {
    public SublabsReadPathParams pathParams;
    public SublabsReadRequest withPathParams(SublabsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SublabsReadSecurity security;
    public SublabsReadRequest withSecurity(SublabsReadSecurity security) {
        this.security = security;
        return this;
    }
}