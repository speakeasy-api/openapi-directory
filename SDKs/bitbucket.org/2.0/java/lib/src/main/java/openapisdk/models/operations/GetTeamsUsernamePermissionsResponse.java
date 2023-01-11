package openapisdk.models.operations;



public class GetTeamsUsernamePermissionsResponse {
    public String contentType;
    public GetTeamsUsernamePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernamePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernamePermissionsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedTeamPermissions paginatedTeamPermissions;
    public GetTeamsUsernamePermissionsResponse withPaginatedTeamPermissions(openapisdk.models.shared.PaginatedTeamPermissions paginatedTeamPermissions) {
        this.paginatedTeamPermissions = paginatedTeamPermissions;
        return this;
    }
}