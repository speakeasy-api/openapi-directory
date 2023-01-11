package openapisdk.models.operations;



public class GetTokenRequest {
    public GetTokenPathParams pathParams;
    public GetTokenRequest withPathParams(GetTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTokenHeaders headers;
    public GetTokenRequest withHeaders(GetTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
}