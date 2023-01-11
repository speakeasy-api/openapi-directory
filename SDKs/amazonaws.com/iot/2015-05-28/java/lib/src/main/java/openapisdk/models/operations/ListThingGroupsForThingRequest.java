package openapisdk.models.operations;



public class ListThingGroupsForThingRequest {
    public ListThingGroupsForThingPathParams pathParams;
    public ListThingGroupsForThingRequest withPathParams(ListThingGroupsForThingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListThingGroupsForThingQueryParams queryParams;
    public ListThingGroupsForThingRequest withQueryParams(ListThingGroupsForThingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListThingGroupsForThingHeaders headers;
    public ListThingGroupsForThingRequest withHeaders(ListThingGroupsForThingHeaders headers) {
        this.headers = headers;
        return this;
    }
}