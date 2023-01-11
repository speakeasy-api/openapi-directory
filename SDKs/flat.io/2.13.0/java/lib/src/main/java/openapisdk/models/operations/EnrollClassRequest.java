package openapisdk.models.operations;



public class EnrollClassRequest {
    public EnrollClassPathParams pathParams;
    public EnrollClassRequest withPathParams(EnrollClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnrollClassSecurity security;
    public EnrollClassRequest withSecurity(EnrollClassSecurity security) {
        this.security = security;
        return this;
    }
}