package openapisdk.models.operations;



public class ListStudiosRequest {
    public ListStudiosQueryParams queryParams;
    public ListStudiosRequest withQueryParams(ListStudiosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStudiosHeaders headers;
    public ListStudiosRequest withHeaders(ListStudiosHeaders headers) {
        this.headers = headers;
        return this;
    }
}