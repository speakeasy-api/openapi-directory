package openapisdk.models.operations;



public class GetClassRequest {
    public GetClassPathParams pathParams;
    public GetClassRequest withPathParams(GetClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetClassSecurity security;
    public GetClassRequest withSecurity(GetClassSecurity security) {
        this.security = security;
        return this;
    }
}