package openapisdk.models.operations;



public class GetWorkspacesWorkspaceProjectsResponse {
    public String contentType;
    public GetWorkspacesWorkspaceProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceProjectsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedProjects paginatedProjects;
    public GetWorkspacesWorkspaceProjectsResponse withPaginatedProjects(openapisdk.models.shared.PaginatedProjects paginatedProjects) {
        this.paginatedProjects = paginatedProjects;
        return this;
    }
}