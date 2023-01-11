package openapisdk.models.operations;



public class ListLayersRequest {
    public ListLayersQueryParams queryParams;
    public ListLayersRequest withQueryParams(ListLayersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLayersHeaders headers;
    public ListLayersRequest withHeaders(ListLayersHeaders headers) {
        this.headers = headers;
        return this;
    }
}