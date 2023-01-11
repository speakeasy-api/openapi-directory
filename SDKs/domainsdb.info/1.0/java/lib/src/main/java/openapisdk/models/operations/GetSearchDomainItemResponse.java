package openapisdk.models.operations;



public class GetSearchDomainItemResponse {
    public String contentType;
    public GetSearchDomainItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResults searchResults;
    public GetSearchDomainItemResponse withSearchResults(openapisdk.models.shared.SearchResults searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    public Long statusCode;
    public GetSearchDomainItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}