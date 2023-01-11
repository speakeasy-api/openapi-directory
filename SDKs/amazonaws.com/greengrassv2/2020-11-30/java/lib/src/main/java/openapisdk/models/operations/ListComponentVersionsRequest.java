package openapisdk.models.operations;



public class ListComponentVersionsRequest {
    public ListComponentVersionsPathParams pathParams;
    public ListComponentVersionsRequest withPathParams(ListComponentVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListComponentVersionsQueryParams queryParams;
    public ListComponentVersionsRequest withQueryParams(ListComponentVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListComponentVersionsHeaders headers;
    public ListComponentVersionsRequest withHeaders(ListComponentVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}