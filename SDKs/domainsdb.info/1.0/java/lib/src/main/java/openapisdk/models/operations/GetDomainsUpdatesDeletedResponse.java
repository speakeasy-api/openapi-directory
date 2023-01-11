package openapisdk.models.operations;



public class GetDomainsUpdatesDeletedResponse {
    public String contentType;
    public GetDomainsUpdatesDeletedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResults searchResults;
    public GetDomainsUpdatesDeletedResponse withSearchResults(openapisdk.models.shared.SearchResults searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    public Long statusCode;
    public GetDomainsUpdatesDeletedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}