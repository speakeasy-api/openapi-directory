package openapisdk.models.operations;



public class ListThingTypesRequest {
    public ListThingTypesQueryParams queryParams;
    public ListThingTypesRequest withQueryParams(ListThingTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListThingTypesHeaders headers;
    public ListThingTypesRequest withHeaders(ListThingTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
}