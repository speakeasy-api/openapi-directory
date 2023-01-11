package openapisdk.models.operations;



public class DescribeRecommendationFeedbackRequest {
    public DescribeRecommendationFeedbackPathParams pathParams;
    public DescribeRecommendationFeedbackRequest withPathParams(DescribeRecommendationFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeRecommendationFeedbackQueryParams queryParams;
    public DescribeRecommendationFeedbackRequest withQueryParams(DescribeRecommendationFeedbackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRecommendationFeedbackHeaders headers;
    public DescribeRecommendationFeedbackRequest withHeaders(DescribeRecommendationFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
}