package openapisdk.models.operations;



public class GetV3SearchImagesCreativeByImageResponse {
    public String contentType;
    public GetV3SearchImagesCreativeByImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchByImageResourceResults searchByImageResourceResults;
    public GetV3SearchImagesCreativeByImageResponse withSearchByImageResourceResults(openapisdk.models.shared.SearchByImageResourceResults searchByImageResourceResults) {
        this.searchByImageResourceResults = searchByImageResourceResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchImagesCreativeByImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}