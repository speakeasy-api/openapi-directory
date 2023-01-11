package openapisdk.models.operations;



public class FunctionsGetExecutionRequest {
    public FunctionsGetExecutionPathParams pathParams;
    public FunctionsGetExecutionRequest withPathParams(FunctionsGetExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FunctionsGetExecutionSecurity security;
    public FunctionsGetExecutionRequest withSecurity(FunctionsGetExecutionSecurity security) {
        this.security = security;
        return this;
    }
}