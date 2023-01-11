package openapisdk.models.operations;



public class FunctionsDeleteRequest {
    public FunctionsDeletePathParams pathParams;
    public FunctionsDeleteRequest withPathParams(FunctionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FunctionsDeleteSecurity security;
    public FunctionsDeleteRequest withSecurity(FunctionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}