package openapisdk.models.operations;



public class GetWorkspacesWorkspaceSearchCodeResponse {
    public String contentType;
    public GetWorkspacesWorkspaceSearchCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceSearchCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceSearchCodeResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResultPage searchResultPage;
    public GetWorkspacesWorkspaceSearchCodeResponse withSearchResultPage(openapisdk.models.shared.SearchResultPage searchResultPage) {
        this.searchResultPage = searchResultPage;
        return this;
    }
}