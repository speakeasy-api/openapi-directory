package openapisdk.models.operations;



public class GetV3SearchVideosCreativeByImageResponse {
    public String contentType;
    public GetV3SearchVideosCreativeByImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeVideoSearchResults creativeVideoSearchResults;
    public GetV3SearchVideosCreativeByImageResponse withCreativeVideoSearchResults(openapisdk.models.shared.CreativeVideoSearchResults creativeVideoSearchResults) {
        this.creativeVideoSearchResults = creativeVideoSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchVideosCreativeByImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}