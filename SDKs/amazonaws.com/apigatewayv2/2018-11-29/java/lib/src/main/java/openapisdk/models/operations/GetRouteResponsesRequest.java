package openapisdk.models.operations;



public class GetRouteResponsesRequest {
    public GetRouteResponsesPathParams pathParams;
    public GetRouteResponsesRequest withPathParams(GetRouteResponsesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRouteResponsesQueryParams queryParams;
    public GetRouteResponsesRequest withQueryParams(GetRouteResponsesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRouteResponsesHeaders headers;
    public GetRouteResponsesRequest withHeaders(GetRouteResponsesHeaders headers) {
        this.headers = headers;
        return this;
    }
}