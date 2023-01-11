package openapisdk.models.operations;



public class GetWorkspacesWorkspacePermissionsResponse {
    public String contentType;
    public GetWorkspacesWorkspacePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspacePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspacePermissionsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWorkspaceMemberships paginatedWorkspaceMemberships;
    public GetWorkspacesWorkspacePermissionsResponse withPaginatedWorkspaceMemberships(openapisdk.models.shared.PaginatedWorkspaceMemberships paginatedWorkspaceMemberships) {
        this.paginatedWorkspaceMemberships = paginatedWorkspaceMemberships;
        return this;
    }
}