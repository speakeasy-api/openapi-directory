package openapisdk.models.operations;



public class GetUserPermissionsRepositoriesResponse {
    public String contentType;
    public GetUserPermissionsRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserPermissionsRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions;
    public GetUserPermissionsRepositoriesResponse withPaginatedRepositoryPermissions(openapisdk.models.shared.PaginatedRepositoryPermissions paginatedRepositoryPermissions) {
        this.paginatedRepositoryPermissions = paginatedRepositoryPermissions;
        return this;
    }
}