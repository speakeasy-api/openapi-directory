package openapisdk.models.operations;



public class PutWorkspacesWorkspaceProjectsProjectKeyResponse {
    public String contentType;
    public PutWorkspacesWorkspaceProjectsProjectKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutWorkspacesWorkspaceProjectsProjectKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutWorkspacesWorkspaceProjectsProjectKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutWorkspacesWorkspaceProjectsProjectKeyResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> project;
    public PutWorkspacesWorkspaceProjectsProjectKeyResponse withProject(java.util.Map<String, Object> project) {
        this.project = project;
        return this;
    }
}