package openapisdk.models.operations;



public class SearchAccountResponse {
    public String contentType;
    public SearchAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SearchAccountResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResultPage searchResultPage;
    public SearchAccountResponse withSearchResultPage(openapisdk.models.shared.SearchResultPage searchResultPage) {
        this.searchResultPage = searchResultPage;
        return this;
    }
}