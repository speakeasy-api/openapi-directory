package openapisdk.models.operations;



public class GetDomainsTldZoneIdSearchResponse {
    public String contentType;
    public GetDomainsTldZoneIdSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResults searchResults;
    public GetDomainsTldZoneIdSearchResponse withSearchResults(openapisdk.models.shared.SearchResults searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    public Long statusCode;
    public GetDomainsTldZoneIdSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}