package openapisdk.models.operations;



public class GetV3SearchVideosCreativeResponse {
    public String contentType;
    public GetV3SearchVideosCreativeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeVideoSearchResults creativeVideoSearchResults;
    public GetV3SearchVideosCreativeResponse withCreativeVideoSearchResults(openapisdk.models.shared.CreativeVideoSearchResults creativeVideoSearchResults) {
        this.creativeVideoSearchResults = creativeVideoSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchVideosCreativeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}