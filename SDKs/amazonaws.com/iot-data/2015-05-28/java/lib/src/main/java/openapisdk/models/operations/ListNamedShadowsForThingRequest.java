package openapisdk.models.operations;



public class ListNamedShadowsForThingRequest {
    public ListNamedShadowsForThingPathParams pathParams;
    public ListNamedShadowsForThingRequest withPathParams(ListNamedShadowsForThingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListNamedShadowsForThingQueryParams queryParams;
    public ListNamedShadowsForThingRequest withQueryParams(ListNamedShadowsForThingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNamedShadowsForThingHeaders headers;
    public ListNamedShadowsForThingRequest withHeaders(ListNamedShadowsForThingHeaders headers) {
        this.headers = headers;
        return this;
    }
}