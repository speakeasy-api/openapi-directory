package openapisdk.models.operations;



public class GetUsersUsernameMembersResponse {
    public String contentType;
    public GetUsersUsernameMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersUsernameMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersUsernameMembersResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> user;
    public GetUsersUsernameMembersResponse withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
}