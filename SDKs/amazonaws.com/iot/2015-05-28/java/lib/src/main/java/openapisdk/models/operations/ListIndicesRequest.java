package openapisdk.models.operations;



public class ListIndicesRequest {
    public ListIndicesQueryParams queryParams;
    public ListIndicesRequest withQueryParams(ListIndicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIndicesHeaders headers;
    public ListIndicesRequest withHeaders(ListIndicesHeaders headers) {
        this.headers = headers;
        return this;
    }
}