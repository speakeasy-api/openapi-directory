package openapisdk.models.operations;



public class ListAccessPreviewsRequest {
    public ListAccessPreviewsQueryParams queryParams;
    public ListAccessPreviewsRequest withQueryParams(ListAccessPreviewsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccessPreviewsHeaders headers;
    public ListAccessPreviewsRequest withHeaders(ListAccessPreviewsHeaders headers) {
        this.headers = headers;
        return this;
    }
}