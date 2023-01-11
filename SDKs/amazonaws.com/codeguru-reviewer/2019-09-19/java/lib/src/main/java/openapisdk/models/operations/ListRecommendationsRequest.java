package openapisdk.models.operations;



public class ListRecommendationsRequest {
    public ListRecommendationsPathParams pathParams;
    public ListRecommendationsRequest withPathParams(ListRecommendationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRecommendationsQueryParams queryParams;
    public ListRecommendationsRequest withQueryParams(ListRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecommendationsHeaders headers;
    public ListRecommendationsRequest withHeaders(ListRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}