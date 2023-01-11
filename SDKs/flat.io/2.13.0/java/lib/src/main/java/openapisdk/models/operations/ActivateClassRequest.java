package openapisdk.models.operations;



public class ActivateClassRequest {
    public ActivateClassPathParams pathParams;
    public ActivateClassRequest withPathParams(ActivateClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActivateClassSecurity security;
    public ActivateClassRequest withSecurity(ActivateClassSecurity security) {
        this.security = security;
        return this;
    }
}