package openapisdk.models.operations;



public class PrivateGroupEmbargoOptionsDetailsRequest {
    public PrivateGroupEmbargoOptionsDetailsPathParams pathParams;
    public PrivateGroupEmbargoOptionsDetailsRequest withPathParams(PrivateGroupEmbargoOptionsDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateGroupEmbargoOptionsDetailsSecurity security;
    public PrivateGroupEmbargoOptionsDetailsRequest withSecurity(PrivateGroupEmbargoOptionsDetailsSecurity security) {
        this.security = security;
        return this;
    }
}