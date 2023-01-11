package openapisdk.models.operations;



public class ListProfileTimesRequest {
    public ListProfileTimesPathParams pathParams;
    public ListProfileTimesRequest withPathParams(ListProfileTimesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListProfileTimesQueryParams queryParams;
    public ListProfileTimesRequest withQueryParams(ListProfileTimesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProfileTimesHeaders headers;
    public ListProfileTimesRequest withHeaders(ListProfileTimesHeaders headers) {
        this.headers = headers;
        return this;
    }
}