package openapisdk.models.operations;



public class GetGraphqlApiRequest {
    public GetGraphqlApiPathParams pathParams;
    public GetGraphqlApiRequest withPathParams(GetGraphqlApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGraphqlApiHeaders headers;
    public GetGraphqlApiRequest withHeaders(GetGraphqlApiHeaders headers) {
        this.headers = headers;
        return this;
    }
}