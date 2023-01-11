package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdWatchResponse {
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdWatchResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedUsers paginatedUsers;
    public GetSnippetsWorkspaceEncodedIdWatchResponse withPaginatedUsers(openapisdk.models.shared.PaginatedUsers paginatedUsers) {
        this.paginatedUsers = paginatedUsers;
        return this;
    }
}