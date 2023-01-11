package openapisdk.models.operations;



public class GetWorkspacesWorkspaceMembersResponse {
    public String contentType;
    public GetWorkspacesWorkspaceMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceMembersResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWorkspaceMemberships paginatedWorkspaceMemberships;
    public GetWorkspacesWorkspaceMembersResponse withPaginatedWorkspaceMemberships(openapisdk.models.shared.PaginatedWorkspaceMemberships paginatedWorkspaceMemberships) {
        this.paginatedWorkspaceMemberships = paginatedWorkspaceMemberships;
        return this;
    }
}