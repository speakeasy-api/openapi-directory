package openapisdk.models.operations;



public class DeleteThingGroupRequest {
    public DeleteThingGroupPathParams pathParams;
    public DeleteThingGroupRequest withPathParams(DeleteThingGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteThingGroupQueryParams queryParams;
    public DeleteThingGroupRequest withQueryParams(DeleteThingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteThingGroupHeaders headers;
    public DeleteThingGroupRequest withHeaders(DeleteThingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
}