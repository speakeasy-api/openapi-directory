package openapisdk.models.operations;



public class PostWorkspacesWorkspaceProjectsResponse {
    public String contentType;
    public PostWorkspacesWorkspaceProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostWorkspacesWorkspaceProjectsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostWorkspacesWorkspaceProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostWorkspacesWorkspaceProjectsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> project;
    public PostWorkspacesWorkspaceProjectsResponse withProject(java.util.Map<String, Object> project) {
        this.project = project;
        return this;
    }
}