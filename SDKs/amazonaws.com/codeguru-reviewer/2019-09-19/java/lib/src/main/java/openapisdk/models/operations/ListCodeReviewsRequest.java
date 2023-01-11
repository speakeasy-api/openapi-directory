package openapisdk.models.operations;



public class ListCodeReviewsRequest {
    public ListCodeReviewsQueryParams queryParams;
    public ListCodeReviewsRequest withQueryParams(ListCodeReviewsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCodeReviewsHeaders headers;
    public ListCodeReviewsRequest withHeaders(ListCodeReviewsHeaders headers) {
        this.headers = headers;
        return this;
    }
}