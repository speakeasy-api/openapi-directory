package openapisdk.models.operations;



public class PutTeamsUsernameProjectsProjectKeyResponse {
    public String contentType;
    public PutTeamsUsernameProjectsProjectKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutTeamsUsernameProjectsProjectKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutTeamsUsernameProjectsProjectKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutTeamsUsernameProjectsProjectKeyResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> project;
    public PutTeamsUsernameProjectsProjectKeyResponse withProject(java.util.Map<String, Object> project) {
        this.project = project;
        return this;
    }
}