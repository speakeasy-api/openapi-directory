package openapisdk.models.operations;



public class FunctionsDeleteTagRequest {
    public FunctionsDeleteTagPathParams pathParams;
    public FunctionsDeleteTagRequest withPathParams(FunctionsDeleteTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FunctionsDeleteTagSecurity security;
    public FunctionsDeleteTagRequest withSecurity(FunctionsDeleteTagSecurity security) {
        this.security = security;
        return this;
    }
}