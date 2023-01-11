package openapisdk.models.operations;



public class GetTeamsUsernameProjectsResponse {
    public String contentType;
    public GetTeamsUsernameProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernameProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernameProjectsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedProjects paginatedProjects;
    public GetTeamsUsernameProjectsResponse withPaginatedProjects(openapisdk.models.shared.PaginatedProjects paginatedProjects) {
        this.paginatedProjects = paginatedProjects;
        return this;
    }
}