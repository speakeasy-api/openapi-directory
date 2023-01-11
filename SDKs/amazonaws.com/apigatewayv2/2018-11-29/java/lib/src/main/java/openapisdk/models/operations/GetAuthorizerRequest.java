package openapisdk.models.operations;



public class GetAuthorizerRequest {
    public GetAuthorizerPathParams pathParams;
    public GetAuthorizerRequest withPathParams(GetAuthorizerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAuthorizerHeaders headers;
    public GetAuthorizerRequest withHeaders(GetAuthorizerHeaders headers) {
        this.headers = headers;
        return this;
    }
}