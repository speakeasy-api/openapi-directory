package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdCommitsResponse {
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdCommitsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedSnippetCommit paginatedSnippetCommit;
    public GetSnippetsWorkspaceEncodedIdCommitsResponse withPaginatedSnippetCommit(openapisdk.models.shared.PaginatedSnippetCommit paginatedSnippetCommit) {
        this.paginatedSnippetCommit = paginatedSnippetCommit;
        return this;
    }
}