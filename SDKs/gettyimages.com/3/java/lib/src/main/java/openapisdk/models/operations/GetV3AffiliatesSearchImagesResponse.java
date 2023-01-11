package openapisdk.models.operations;



public class GetV3AffiliatesSearchImagesResponse {
    public openapisdk.models.shared.AffiliateImageSearchResponse affiliateImageSearchResponse;
    public GetV3AffiliatesSearchImagesResponse withAffiliateImageSearchResponse(openapisdk.models.shared.AffiliateImageSearchResponse affiliateImageSearchResponse) {
        this.affiliateImageSearchResponse = affiliateImageSearchResponse;
        return this;
    }
    public String contentType;
    public GetV3AffiliatesSearchImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3AffiliatesSearchImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}