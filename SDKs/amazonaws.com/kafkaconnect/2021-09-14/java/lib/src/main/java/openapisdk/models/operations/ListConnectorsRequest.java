package openapisdk.models.operations;



public class ListConnectorsRequest {
    public ListConnectorsQueryParams queryParams;
    public ListConnectorsRequest withQueryParams(ListConnectorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectorsHeaders headers;
    public ListConnectorsRequest withHeaders(ListConnectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
}