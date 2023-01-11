package openapisdk.models.operations;



public class FunctionsListExecutionsRequest {
    public FunctionsListExecutionsPathParams pathParams;
    public FunctionsListExecutionsRequest withPathParams(FunctionsListExecutionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FunctionsListExecutionsQueryParams queryParams;
    public FunctionsListExecutionsRequest withQueryParams(FunctionsListExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FunctionsListExecutionsSecurity security;
    public FunctionsListExecutionsRequest withSecurity(FunctionsListExecutionsSecurity security) {
        this.security = security;
        return this;
    }
}