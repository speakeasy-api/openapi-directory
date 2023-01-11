package openapisdk.models.operations;



public class ListRecommendationFeedbackRequest {
    public ListRecommendationFeedbackPathParams pathParams;
    public ListRecommendationFeedbackRequest withPathParams(ListRecommendationFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRecommendationFeedbackQueryParams queryParams;
    public ListRecommendationFeedbackRequest withQueryParams(ListRecommendationFeedbackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecommendationFeedbackHeaders headers;
    public ListRecommendationFeedbackRequest withHeaders(ListRecommendationFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
}