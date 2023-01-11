package openapisdk.models.operations;



public class GetTeamsWorkspaceRepositoriesResponse {
    public String contentType;
    public GetTeamsWorkspaceRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsWorkspaceRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsWorkspaceRepositoriesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}