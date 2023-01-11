package openapisdk.models.operations;



public class GetUserPermissionsWorkspacesResponse {
    public String contentType;
    public GetUserPermissionsWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserPermissionsWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUserPermissionsWorkspacesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWorkspaceMemberships paginatedWorkspaceMemberships;
    public GetUserPermissionsWorkspacesResponse withPaginatedWorkspaceMemberships(openapisdk.models.shared.PaginatedWorkspaceMemberships paginatedWorkspaceMemberships) {
        this.paginatedWorkspaceMemberships = paginatedWorkspaceMemberships;
        return this;
    }
}