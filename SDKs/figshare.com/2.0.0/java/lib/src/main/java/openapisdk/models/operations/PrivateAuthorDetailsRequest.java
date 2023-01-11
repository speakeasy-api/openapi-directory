package openapisdk.models.operations;



public class PrivateAuthorDetailsRequest {
    public PrivateAuthorDetailsPathParams pathParams;
    public PrivateAuthorDetailsRequest withPathParams(PrivateAuthorDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateAuthorDetailsSecurity security;
    public PrivateAuthorDetailsRequest withSecurity(PrivateAuthorDetailsSecurity security) {
        this.security = security;
        return this;
    }
}