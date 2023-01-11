package openapisdk.models.operations;



public class GetTypeRequest {
    public GetTypePathParams pathParams;
    public GetTypeRequest withPathParams(GetTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTypeQueryParams queryParams;
    public GetTypeRequest withQueryParams(GetTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTypeHeaders headers;
    public GetTypeRequest withHeaders(GetTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
}