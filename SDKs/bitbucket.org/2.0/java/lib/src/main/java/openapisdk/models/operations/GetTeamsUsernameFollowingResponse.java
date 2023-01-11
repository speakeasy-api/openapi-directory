package openapisdk.models.operations;



public class GetTeamsUsernameFollowingResponse {
    public String contentType;
    public GetTeamsUsernameFollowingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernameFollowingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernameFollowingResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedUsers paginatedUsers;
    public GetTeamsUsernameFollowingResponse withPaginatedUsers(openapisdk.models.shared.PaginatedUsers paginatedUsers) {
        this.paginatedUsers = paginatedUsers;
        return this;
    }
}