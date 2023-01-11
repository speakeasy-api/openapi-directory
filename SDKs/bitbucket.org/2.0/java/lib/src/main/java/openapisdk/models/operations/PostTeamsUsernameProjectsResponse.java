package openapisdk.models.operations;



public class PostTeamsUsernameProjectsResponse {
    public String contentType;
    public PostTeamsUsernameProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostTeamsUsernameProjectsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostTeamsUsernameProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostTeamsUsernameProjectsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> project;
    public PostTeamsUsernameProjectsResponse withProject(java.util.Map<String, Object> project) {
        this.project = project;
        return this;
    }
}