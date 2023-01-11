package openapisdk.models.operations;



public class PutSnippetsWorkspaceEncodedIdWatchResponse {
    public String contentType;
    public PutSnippetsWorkspaceEncodedIdWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSnippetsWorkspaceEncodedIdWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutSnippetsWorkspaceEncodedIdWatchResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedUsers paginatedUsers;
    public PutSnippetsWorkspaceEncodedIdWatchResponse withPaginatedUsers(openapisdk.models.shared.PaginatedUsers paginatedUsers) {
        this.paginatedUsers = paginatedUsers;
        return this;
    }
}