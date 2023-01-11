package openapisdk.models.operations;



public class DeleteSnippetsWorkspaceEncodedIdWatchResponse {
    public String contentType;
    public DeleteSnippetsWorkspaceEncodedIdWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteSnippetsWorkspaceEncodedIdWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteSnippetsWorkspaceEncodedIdWatchResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedUsers paginatedUsers;
    public DeleteSnippetsWorkspaceEncodedIdWatchResponse withPaginatedUsers(openapisdk.models.shared.PaginatedUsers paginatedUsers) {
        this.paginatedUsers = paginatedUsers;
        return this;
    }
}