package openapisdk.models.operations;



public class ListThingsInThingGroupRequest {
    public ListThingsInThingGroupPathParams pathParams;
    public ListThingsInThingGroupRequest withPathParams(ListThingsInThingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListThingsInThingGroupQueryParams queryParams;
    public ListThingsInThingGroupRequest withQueryParams(ListThingsInThingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListThingsInThingGroupHeaders headers;
    public ListThingsInThingGroupRequest withHeaders(ListThingsInThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}