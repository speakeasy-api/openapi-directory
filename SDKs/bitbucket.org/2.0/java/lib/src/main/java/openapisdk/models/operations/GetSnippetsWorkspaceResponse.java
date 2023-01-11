package openapisdk.models.operations;



public class GetSnippetsWorkspaceResponse {
    public String contentType;
    public GetSnippetsWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedSnippets paginatedSnippets;
    public GetSnippetsWorkspaceResponse withPaginatedSnippets(openapisdk.models.shared.PaginatedSnippets paginatedSnippets) {
        this.paginatedSnippets = paginatedSnippets;
        return this;
    }
}