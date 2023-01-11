package openapisdk.models.operations;



public class GetDomainsUpdatesAddedResponse {
    public String contentType;
    public GetDomainsUpdatesAddedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResults searchResults;
    public GetDomainsUpdatesAddedResponse withSearchResults(openapisdk.models.shared.SearchResults searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    public Long statusCode;
    public GetDomainsUpdatesAddedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}