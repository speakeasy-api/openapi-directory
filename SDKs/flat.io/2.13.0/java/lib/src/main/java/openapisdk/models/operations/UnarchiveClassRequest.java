package openapisdk.models.operations;



public class UnarchiveClassRequest {
    public UnarchiveClassPathParams pathParams;
    public UnarchiveClassRequest withPathParams(UnarchiveClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnarchiveClassSecurity security;
    public UnarchiveClassRequest withSecurity(UnarchiveClassSecurity security) {
        this.security = security;
        return this;
    }
}