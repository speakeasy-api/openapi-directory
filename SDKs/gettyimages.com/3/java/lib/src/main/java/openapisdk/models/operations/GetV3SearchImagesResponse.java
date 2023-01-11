package openapisdk.models.operations;



public class GetV3SearchImagesResponse {
    public String contentType;
    public GetV3SearchImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageSearchItemSearchResults imageSearchItemSearchResults;
    public GetV3SearchImagesResponse withImageSearchItemSearchResults(openapisdk.models.shared.ImageSearchItemSearchResults imageSearchItemSearchResults) {
        this.imageSearchItemSearchResults = imageSearchItemSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}