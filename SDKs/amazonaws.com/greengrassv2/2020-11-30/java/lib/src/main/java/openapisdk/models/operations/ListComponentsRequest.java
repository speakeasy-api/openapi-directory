package openapisdk.models.operations;



public class ListComponentsRequest {
    public ListComponentsQueryParams queryParams;
    public ListComponentsRequest withQueryParams(ListComponentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListComponentsHeaders headers;
    public ListComponentsRequest withHeaders(ListComponentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}