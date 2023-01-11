package openapisdk.models.operations;



public class GetUsersWorkspaceRepositoriesResponse {
    public String contentType;
    public GetUsersWorkspaceRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersWorkspaceRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersWorkspaceRepositoriesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}