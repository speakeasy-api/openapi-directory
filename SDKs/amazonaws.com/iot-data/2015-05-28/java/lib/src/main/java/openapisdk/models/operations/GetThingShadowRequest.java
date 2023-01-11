package openapisdk.models.operations;



public class GetThingShadowRequest {
    public GetThingShadowPathParams pathParams;
    public GetThingShadowRequest withPathParams(GetThingShadowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetThingShadowQueryParams queryParams;
    public GetThingShadowRequest withQueryParams(GetThingShadowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetThingShadowHeaders headers;
    public GetThingShadowRequest withHeaders(GetThingShadowHeaders headers) {
        this.headers = headers;
        return this;
    }
}