package openapisdk.models.operations;



public class GetTeamsUsernamePermissionsRepositoriesResponse {
    public String contentType;
    public GetTeamsUsernamePermissionsRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernamePermissionsRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernamePermissionsRepositoriesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions;
    public GetTeamsUsernamePermissionsRepositoriesResponse withPaginatedRepositoryPermissions(openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions) {
        this.paginatedRepositoryPermissions = paginatedRepositoryPermissions;
        return this;
    }
}