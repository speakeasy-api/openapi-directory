package openapisdk.models.operations;



public class PrivateProjectDeleteRequest {
    public PrivateProjectDeletePathParams pathParams;
    public PrivateProjectDeleteRequest withPathParams(PrivateProjectDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectDeleteSecurity security;
    public PrivateProjectDeleteRequest withSecurity(PrivateProjectDeleteSecurity security) {
        this.security = security;
        return this;
    }
}