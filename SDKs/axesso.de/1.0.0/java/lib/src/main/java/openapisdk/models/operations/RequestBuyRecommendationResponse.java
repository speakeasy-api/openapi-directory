package openapisdk.models.operations;



public class RequestBuyRecommendationResponse {
    public openapisdk.models.shared.BuyRecommendationResponse buyRecommendationResponse;
    public RequestBuyRecommendationResponse withBuyRecommendationResponse(openapisdk.models.shared.BuyRecommendationResponse buyRecommendationResponse) {
        this.buyRecommendationResponse = buyRecommendationResponse;
        return this;
    }
    public String contentType;
    public RequestBuyRecommendationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RequestBuyRecommendationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}