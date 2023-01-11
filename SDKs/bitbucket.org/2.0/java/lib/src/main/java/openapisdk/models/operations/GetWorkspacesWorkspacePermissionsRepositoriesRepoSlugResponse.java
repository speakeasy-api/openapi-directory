package openapisdk.models.operations;



public class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse {
    public String contentType;
    public GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions;
    public GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse withPaginatedRepositoryPermissions(openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions) {
        this.paginatedRepositoryPermissions = paginatedRepositoryPermissions;
        return this;
    }
}