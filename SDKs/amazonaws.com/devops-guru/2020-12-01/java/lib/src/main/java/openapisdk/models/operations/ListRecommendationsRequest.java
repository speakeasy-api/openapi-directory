package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecommendationsRequest {
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
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListRecommendationsRequestBody request;
    public ListRecommendationsRequest withRequest(ListRecommendationsRequestBody request) {
        this.request = request;
        return this;
    }
}