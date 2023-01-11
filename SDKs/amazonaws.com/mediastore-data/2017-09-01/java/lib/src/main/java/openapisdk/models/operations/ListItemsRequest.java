package openapisdk.models.operations;



public class ListItemsRequest {
    public ListItemsQueryParams queryParams;
    public ListItemsRequest withQueryParams(ListItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListItemsHeaders headers;
    public ListItemsRequest withHeaders(ListItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
}