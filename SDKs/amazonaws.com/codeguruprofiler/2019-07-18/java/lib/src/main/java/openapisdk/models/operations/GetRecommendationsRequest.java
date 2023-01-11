package openapisdk.models.operations;



public class GetRecommendationsRequest {
    public GetRecommendationsPathParams pathParams;
    public GetRecommendationsRequest withPathParams(GetRecommendationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRecommendationsQueryParams queryParams;
    public GetRecommendationsRequest withQueryParams(GetRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRecommendationsHeaders headers;
    public GetRecommendationsRequest withHeaders(GetRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}