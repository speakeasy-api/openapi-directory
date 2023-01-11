package openapisdk.models.operations;



public class ListAssetsRequest {
    public ListAssetsQueryParams queryParams;
    public ListAssetsRequest withQueryParams(ListAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssetsHeaders headers;
    public ListAssetsRequest withHeaders(ListAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}