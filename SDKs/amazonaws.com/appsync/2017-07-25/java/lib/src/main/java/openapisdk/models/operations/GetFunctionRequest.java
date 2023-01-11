package openapisdk.models.operations;



public class GetFunctionRequest {
    public GetFunctionPathParams pathParams;
    public GetFunctionRequest withPathParams(GetFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFunctionHeaders headers;
    public GetFunctionRequest withHeaders(GetFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
}