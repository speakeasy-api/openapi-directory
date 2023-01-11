package openapisdk.models.operations;



public class ListAnalyzersRequest {
    public ListAnalyzersQueryParams queryParams;
    public ListAnalyzersRequest withQueryParams(ListAnalyzersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAnalyzersHeaders headers;
    public ListAnalyzersRequest withHeaders(ListAnalyzersHeaders headers) {
        this.headers = headers;
        return this;
    }
}