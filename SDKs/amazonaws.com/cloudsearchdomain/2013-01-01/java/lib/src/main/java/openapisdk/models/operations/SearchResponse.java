package openapisdk.models.operations;



public class SearchResponse {
    public String contentType;
    public SearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchException searchException;
    public SearchResponse withSearchException(openapisdk.models.shared.SearchException searchException) {
        this.searchException = searchException;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public SearchResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public SearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}