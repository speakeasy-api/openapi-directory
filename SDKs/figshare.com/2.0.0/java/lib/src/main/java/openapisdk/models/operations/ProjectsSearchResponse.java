package openapisdk.models.operations;



public class ProjectsSearchResponse {
    public String contentType;
    public ProjectsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project[] projects;
    public ProjectsSearchResponse withProjects(openapisdk.models.shared.Project[] projects) {
        this.projects = projects;
        return this;
    }
    public Long statusCode;
    public ProjectsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}