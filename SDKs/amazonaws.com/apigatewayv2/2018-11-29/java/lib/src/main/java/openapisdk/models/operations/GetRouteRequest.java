package openapisdk.models.operations;



public class GetRouteRequest {
    public GetRoutePathParams pathParams;
    public GetRouteRequest withPathParams(GetRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRouteHeaders headers;
    public GetRouteRequest withHeaders(GetRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
}