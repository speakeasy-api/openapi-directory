package openapisdk.models.operations;



public class GetTldDomainItemResponse {
    public String contentType;
    public GetTldDomainItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResults searchResults;
    public GetTldDomainItemResponse withSearchResults(openapisdk.models.shared.SearchResults searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    public Long statusCode;
    public GetTldDomainItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}