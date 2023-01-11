package openapisdk.models.operations;



public class GetV3ImagesIdSameSeriesResponse {
    public String contentType;
    public GetV3ImagesIdSameSeriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageSearchItemSearchResults imageSearchItemSearchResults;
    public GetV3ImagesIdSameSeriesResponse withImageSearchItemSearchResults(openapisdk.models.shared.ImageSearchItemSearchResults imageSearchItemSearchResults) {
        this.imageSearchItemSearchResults = imageSearchItemSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3ImagesIdSameSeriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}