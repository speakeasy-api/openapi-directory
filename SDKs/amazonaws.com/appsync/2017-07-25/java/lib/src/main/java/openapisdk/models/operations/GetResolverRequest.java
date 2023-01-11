package openapisdk.models.operations;



public class GetResolverRequest {
    public GetResolverPathParams pathParams;
    public GetResolverRequest withPathParams(GetResolverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetResolverHeaders headers;
    public GetResolverRequest withHeaders(GetResolverHeaders headers) {
        this.headers = headers;
        return this;
    }
}