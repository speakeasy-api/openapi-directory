package openapisdk.models.operations;



public class ListLensReviewsRequest {
    public ListLensReviewsPathParams pathParams;
    public ListLensReviewsRequest withPathParams(ListLensReviewsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListLensReviewsQueryParams queryParams;
    public ListLensReviewsRequest withQueryParams(ListLensReviewsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLensReviewsHeaders headers;
    public ListLensReviewsRequest withHeaders(ListLensReviewsHeaders headers) {
        this.headers = headers;
        return this;
    }
}