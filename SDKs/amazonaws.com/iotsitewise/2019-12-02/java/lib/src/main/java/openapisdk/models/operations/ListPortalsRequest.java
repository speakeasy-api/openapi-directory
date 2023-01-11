package openapisdk.models.operations;



public class ListPortalsRequest {
    public ListPortalsQueryParams queryParams;
    public ListPortalsRequest withQueryParams(ListPortalsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPortalsHeaders headers;
    public ListPortalsRequest withHeaders(ListPortalsHeaders headers) {
        this.headers = headers;
        return this;
    }
}