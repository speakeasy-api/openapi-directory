package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindListingRecommendationsRequest {
    public FindListingRecommendationsQueryParams queryParams;
    public FindListingRecommendationsRequest withQueryParams(FindListingRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FindListingRecommendationsHeaders headers;
    public FindListingRecommendationsRequest withHeaders(FindListingRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindListingRecommendationRequest request;
    public FindListingRecommendationsRequest withRequest(openapisdk.models.shared.FindListingRecommendationRequest request) {
        this.request = request;
        return this;
    }
    public FindListingRecommendationsSecurity security;
    public FindListingRecommendationsRequest withSecurity(FindListingRecommendationsSecurity security) {
        this.security = security;
        return this;
    }
}