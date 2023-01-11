package openapisdk.models.operations;



public class GetTeamsUsernameProjectsProjectKeyResponse {
    public String contentType;
    public GetTeamsUsernameProjectsProjectKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernameProjectsProjectKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernameProjectsProjectKeyResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> project;
    public GetTeamsUsernameProjectsProjectKeyResponse withProject(java.util.Map<String, Object> project) {
        this.project = project;
        return this;
    }
}