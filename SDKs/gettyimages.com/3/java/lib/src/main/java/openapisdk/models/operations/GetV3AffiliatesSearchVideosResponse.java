package openapisdk.models.operations;



public class GetV3AffiliatesSearchVideosResponse {
    public openapisdk.models.shared.AffiliateVideoSearchResponse affiliateVideoSearchResponse;
    public GetV3AffiliatesSearchVideosResponse withAffiliateVideoSearchResponse(openapisdk.models.shared.AffiliateVideoSearchResponse affiliateVideoSearchResponse) {
        this.affiliateVideoSearchResponse = affiliateVideoSearchResponse;
        return this;
    }
    public String contentType;
    public GetV3AffiliatesSearchVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3AffiliatesSearchVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}