package openapisdk.models.operations;



public class GetV3SearchImagesEditorialResponse {
    public String contentType;
    public GetV3SearchImagesEditorialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialImageSearchResults editorialImageSearchResults;
    public GetV3SearchImagesEditorialResponse withEditorialImageSearchResults(openapisdk.models.shared.EditorialImageSearchResults editorialImageSearchResults) {
        this.editorialImageSearchResults = editorialImageSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchImagesEditorialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}