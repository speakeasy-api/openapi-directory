package openapisdk.models.operations;



public class GetProjectsResponse {
    public String contentType;
    public GetProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project[] projects;
    public GetProjectsResponse withProjects(openapisdk.models.shared.Project[] projects) {
        this.projects = projects;
        return this;
    }
    public Long statusCode;
    public GetProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}