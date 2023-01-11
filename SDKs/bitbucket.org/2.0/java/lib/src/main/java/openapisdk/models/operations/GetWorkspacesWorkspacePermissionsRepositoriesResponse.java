package openapisdk.models.operations;



public class GetWorkspacesWorkspacePermissionsRepositoriesResponse {
    public String contentType;
    public GetWorkspacesWorkspacePermissionsRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspacePermissionsRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspacePermissionsRepositoriesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions;
    public GetWorkspacesWorkspacePermissionsRepositoriesResponse withPaginatedRepositoryPermissions(openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions) {
        this.paginatedRepositoryPermissions = paginatedRepositoryPermissions;
        return this;
    }
}