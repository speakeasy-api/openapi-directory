package openapisdk.models.operations;



public class FindListingRecommendationsResponse {
    public String contentType;
    public FindListingRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListingRecommendationCollection pagedListingRecommendationCollection;
    public FindListingRecommendationsResponse withPagedListingRecommendationCollection(openapisdk.models.shared.PagedListingRecommendationCollection pagedListingRecommendationCollection) {
        this.pagedListingRecommendationCollection = pagedListingRecommendationCollection;
        return this;
    }
    public Long statusCode;
    public FindListingRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}