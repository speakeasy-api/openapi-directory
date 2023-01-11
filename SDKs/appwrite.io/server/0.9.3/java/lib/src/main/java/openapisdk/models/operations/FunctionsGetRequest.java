package openapisdk.models.operations;



public class FunctionsGetRequest {
    public FunctionsGetPathParams pathParams;
    public FunctionsGetRequest withPathParams(FunctionsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FunctionsGetSecurity security;
    public FunctionsGetRequest withSecurity(FunctionsGetSecurity security) {
        this.security = security;
        return this;
    }
}