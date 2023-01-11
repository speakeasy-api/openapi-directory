package openapisdk.models.operations;



public class GetV3SearchImagesCreativeResponse {
    public String contentType;
    public GetV3SearchImagesCreativeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeImageSearchResults creativeImageSearchResults;
    public GetV3SearchImagesCreativeResponse withCreativeImageSearchResults(openapisdk.models.shared.CreativeImageSearchResults creativeImageSearchResults) {
        this.creativeImageSearchResults = creativeImageSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchImagesCreativeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}