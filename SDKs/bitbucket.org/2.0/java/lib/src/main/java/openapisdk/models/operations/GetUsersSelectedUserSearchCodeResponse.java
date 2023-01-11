package openapisdk.models.operations;



public class GetUsersSelectedUserSearchCodeResponse {
    public String contentType;
    public GetUsersSelectedUserSearchCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersSelectedUserSearchCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersSelectedUserSearchCodeResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResultPage searchResultPage;
    public GetUsersSelectedUserSearchCodeResponse withSearchResultPage(openapisdk.models.shared.SearchResultPage searchResultPage) {
        this.searchResultPage = searchResultPage;
        return this;
    }
}