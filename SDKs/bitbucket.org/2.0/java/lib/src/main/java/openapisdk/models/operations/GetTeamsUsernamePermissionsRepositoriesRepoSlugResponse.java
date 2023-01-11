package openapisdk.models.operations;



public class GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse {
    public String contentType;
    public GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions;
    public GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse withPaginatedRepositoryPermissions(openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions) {
        this.paginatedRepositoryPermissions = paginatedRepositoryPermissions;
        return this;
    }
}