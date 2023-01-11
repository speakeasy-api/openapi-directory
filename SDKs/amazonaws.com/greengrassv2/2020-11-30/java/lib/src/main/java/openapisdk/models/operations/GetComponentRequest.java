package openapisdk.models.operations;



public class GetComponentRequest {
    public GetComponentPathParams pathParams;
    public GetComponentRequest withPathParams(GetComponentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetComponentQueryParams queryParams;
    public GetComponentRequest withQueryParams(GetComponentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComponentHeaders headers;
    public GetComponentRequest withHeaders(GetComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
}