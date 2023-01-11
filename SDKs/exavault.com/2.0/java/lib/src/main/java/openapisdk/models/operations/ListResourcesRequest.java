package openapisdk.models.operations;



public class ListResourcesRequest {
    public ListResourcesQueryParams queryParams;
    public ListResourcesRequest withQueryParams(ListResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourcesHeaders headers;
    public ListResourcesRequest withHeaders(ListResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
}