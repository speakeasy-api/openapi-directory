package openapisdk.models.operations;



public class PrivateProjectDetailsRequest {
    public PrivateProjectDetailsPathParams pathParams;
    public PrivateProjectDetailsRequest withPathParams(PrivateProjectDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectDetailsSecurity security;
    public PrivateProjectDetailsRequest withSecurity(PrivateProjectDetailsSecurity security) {
        this.security = security;
        return this;
    }
}