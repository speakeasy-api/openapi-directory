package openapisdk.models.operations;



public class ListJobExecutionsForThingRequest {
    public ListJobExecutionsForThingPathParams pathParams;
    public ListJobExecutionsForThingRequest withPathParams(ListJobExecutionsForThingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListJobExecutionsForThingQueryParams queryParams;
    public ListJobExecutionsForThingRequest withQueryParams(ListJobExecutionsForThingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListJobExecutionsForThingHeaders headers;
    public ListJobExecutionsForThingRequest withHeaders(ListJobExecutionsForThingHeaders headers) {
        this.headers = headers;
        return this;
    }
}