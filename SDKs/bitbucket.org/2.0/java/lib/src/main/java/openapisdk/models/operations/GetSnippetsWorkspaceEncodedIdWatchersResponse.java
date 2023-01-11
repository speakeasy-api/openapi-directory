package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdWatchersResponse {
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdWatchersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdWatchersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdWatchersResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedUsers paginatedUsers;
    public GetSnippetsWorkspaceEncodedIdWatchersResponse withPaginatedUsers(openapisdk.models.shared.PaginatedUsers paginatedUsers) {
        this.paginatedUsers = paginatedUsers;
        return this;
    }
}