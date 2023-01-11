package openapisdk.models.operations;



public class SearchResponse {
    public String contentType;
    public SearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResult[] searchResults;
    public SearchResponse withSearchResults(openapisdk.models.shared.SearchResult[] searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    public Long statusCode;
    public SearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}