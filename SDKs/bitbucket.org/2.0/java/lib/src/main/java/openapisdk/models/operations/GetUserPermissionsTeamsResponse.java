package openapisdk.models.operations;



public class GetUserPermissionsTeamsResponse {
    public String contentType;
    public GetUserPermissionsTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserPermissionsTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedTeamPermissions paginatedTeamPermissions;
    public GetUserPermissionsTeamsResponse withPaginatedTeamPermissions(openapisdk.models.shared.PaginatedTeamPermissions paginatedTeamPermissions) {
        this.paginatedTeamPermissions = paginatedTeamPermissions;
        return this;
    }
}