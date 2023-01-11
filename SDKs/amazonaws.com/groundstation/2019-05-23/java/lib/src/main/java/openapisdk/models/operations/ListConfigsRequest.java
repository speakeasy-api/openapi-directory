package openapisdk.models.operations;



public class ListConfigsRequest {
    public ListConfigsQueryParams queryParams;
    public ListConfigsRequest withQueryParams(ListConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConfigsHeaders headers;
    public ListConfigsRequest withHeaders(ListConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
}