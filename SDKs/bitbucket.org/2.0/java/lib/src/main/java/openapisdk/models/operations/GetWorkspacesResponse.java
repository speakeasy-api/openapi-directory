package openapisdk.models.operations;



public class GetWorkspacesResponse {
    public String contentType;
    public GetWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWorkspaces paginatedWorkspaces;
    public GetWorkspacesResponse withPaginatedWorkspaces(openapisdk.models.shared.PaginatedWorkspaces paginatedWorkspaces) {
        this.paginatedWorkspaces = paginatedWorkspaces;
        return this;
    }
}