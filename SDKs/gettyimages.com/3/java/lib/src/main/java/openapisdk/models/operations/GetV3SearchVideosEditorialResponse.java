package openapisdk.models.operations;



public class GetV3SearchVideosEditorialResponse {
    public String contentType;
    public GetV3SearchVideosEditorialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialVideoSearchResults editorialVideoSearchResults;
    public GetV3SearchVideosEditorialResponse withEditorialVideoSearchResults(openapisdk.models.shared.EditorialVideoSearchResults editorialVideoSearchResults) {
        this.editorialVideoSearchResults = editorialVideoSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV3SearchVideosEditorialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}