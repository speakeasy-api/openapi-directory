package openapisdk.models.operations;



public class GetUsersSelectedUserResponse {
    public String contentType;
    public GetUsersSelectedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersSelectedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersSelectedUserResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> user;
    public GetUsersSelectedUserResponse withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
}