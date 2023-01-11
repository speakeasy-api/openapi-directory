package openapisdk.models.operations;



public class GetRouteResponseRequest {
    public GetRouteResponsePathParams pathParams;
    public GetRouteResponseRequest withPathParams(GetRouteResponsePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRouteResponseHeaders headers;
    public GetRouteResponseRequest withHeaders(GetRouteResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
}