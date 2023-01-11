package openapisdk.models.operations;



public class GetV3ImagesIdSimilarResponse {
    public String contentType;
    public GetV3ImagesIdSimilarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageSearchItemSearchResults imageSearchItemSearchResults;
    public GetV3ImagesIdSimilarResponse withImageSearchItemSearchResults(openapisdk.models.shared.ImageSearchItemSearchResults imageSearchItemSearchResults) {
        this.imageSearchItemSearchResults = imageSearchItemSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3ImagesIdSimilarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}