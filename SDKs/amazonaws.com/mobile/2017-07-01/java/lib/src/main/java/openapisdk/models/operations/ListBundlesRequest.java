package openapisdk.models.operations;



public class ListBundlesRequest {
    public ListBundlesQueryParams queryParams;
    public ListBundlesRequest withQueryParams(ListBundlesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBundlesHeaders headers;
    public ListBundlesRequest withHeaders(ListBundlesHeaders headers) {
        this.headers = headers;
        return this;
    }
}