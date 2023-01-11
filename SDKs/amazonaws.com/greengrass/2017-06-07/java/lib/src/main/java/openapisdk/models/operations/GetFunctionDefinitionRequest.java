package openapisdk.models.operations;



public class GetFunctionDefinitionRequest {
    public GetFunctionDefinitionPathParams pathParams;
    public GetFunctionDefinitionRequest withPathParams(GetFunctionDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFunctionDefinitionHeaders headers;
    public GetFunctionDefinitionRequest withHeaders(GetFunctionDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
}