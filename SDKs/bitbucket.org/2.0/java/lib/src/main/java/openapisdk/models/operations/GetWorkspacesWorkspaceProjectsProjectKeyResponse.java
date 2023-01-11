package openapisdk.models.operations;



public class GetWorkspacesWorkspaceProjectsProjectKeyResponse {
    public String contentType;
    public GetWorkspacesWorkspaceProjectsProjectKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceProjectsProjectKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceProjectsProjectKeyResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> project;
    public GetWorkspacesWorkspaceProjectsProjectKeyResponse withProject(java.util.Map<String, Object> project) {
        this.project = project;
        return this;
    }
}