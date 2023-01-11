package openapisdk.models.operations;



public class ListSharesRequest {
    public ListSharesQueryParams queryParams;
    public ListSharesRequest withQueryParams(ListSharesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSharesHeaders headers;
    public ListSharesRequest withHeaders(ListSharesHeaders headers) {
        this.headers = headers;
        return this;
    }
}